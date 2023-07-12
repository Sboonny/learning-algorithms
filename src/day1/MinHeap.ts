export default class MinHeap {
    public length: number;
    private data: number[];



    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {

    }
    delete(): number {

    }

    private heapifyUp(idx: number) {
        if(idx === 0) return;

        const currentParent = this.parent(idx);
        const parentValue = this.data[currentParent];
        const currentValue = this.data[idx];
        if(parentValue > currentValue) {
            this.data[idx] = parentValue
            this.data[currentParent] = currentValue
            this.heapifyUp(currentParent);
        }
    }

    private parent(idx: number) {
        return Math.floor((idx - 1) / 2);
    }
    private leftChild(idx: number) {
        return Math.floor((idx * 2) + 1);
    }
    private rightChild(idx: number) {
        return Math.floor((idx * 2) + 2);
    }
}