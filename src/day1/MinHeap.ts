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

    private heapifyDown(idx: number) {
        const leftIndex = this.leftChild(idx);
        const rightIndex = this.rightChild(idx);
        if(idx >= this.length || leftIndex >= this.length) {
            return;
        }

        const leftValue = this.data[leftIndex];
        const rightValue = this.data[rightIndex];
        const value = this.data[idx];

        if(leftValue > rightValue && value > rightValue) {
            this.data[idx] = rightValue;
            this.data[rightIndex] = value;
            this.heapifyDown(rightIndex)
        } else if(rightValue > leftValue && value > leftValue) {
            this.data[idx] = leftValue;
            this.data[leftIndex] = value;
            this.heapifyDown(leftIndex)
        }
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