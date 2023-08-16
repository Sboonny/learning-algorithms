type Node<TValue> = {
    value: TValue;
    next?: Node<TValue>;
    prev?: Node<TValue>;
};

function createNode<TValue>(value: TValue): Node<TValue> {
    return { value };
}

export default class LRU<TKey, TValue> {
    private length: number;
    private head?: Node<TValue>;
    private tail?: Node<TValue>;

    private lookup?: Map<TKey, Node<TValue>>;
    private reverseLookup?: Map<Node<TValue>, TKey>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<TKey, Node<TValue>>();
        this.reverseLookup = new Map<Node<TValue>, TKey>();
    }

    update(key: TKey, value: TValue): void {
        let node = this.lookup?.get(key);
        if (!node) {
            node = createNode(value);
            this.length++;
            this.prepend(node);
            this.trimCache();

            this.lookup?.set(key, node)
            this.reverseLookup?.set(node, key)
        } else {
            this.detach(node);
            this.prepend(node);
        }

    }
    get(key: TKey): TValue | undefined {
        const node = this.lookup?.get(key);
        if (!node) {
            return undefined;
        }

        this.detach(node);
        this.prepend(node);

        return node.value
    }
    
    private detach(node: Node<TValue>): void {
        if(node.prev) {
            node.prev.next = node.next;
        }
        if(node.next) {
            node.next.prev = node.prev;
        }

        if(this.head === node) {
            this.head = this.head.next;
        }

        if(this.tail === node) {
            this.tail = this.tail.prev;
        }

        node.next = undefined;
        node.prev = undefined;
    }

    private prepend(node: Node<TValue>):void {
        if(!this.head){
            this.head =this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private trimCache() {
        if(this.length <= this.capacity){
            return
        }

        if(this.tail){
            const tail = this.tail;
            this.detach(this.tail)
            const key = this.reverseLookup?.get(tail) as TKey;
            this.lookup?.delete(key);
            this.reverseLookup?.delete(tail);
            this.length--;
        }

    }

}
