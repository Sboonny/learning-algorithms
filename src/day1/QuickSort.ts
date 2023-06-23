function quick_sort_recurrsion(
    array: number[],
    low: number,
    high: number,
): void {
    if (low >= high) return;

    const partitionIndex = partition(array, low, high);

    quick_sort_recurrsion(array, low, partitionIndex - 1);
    quick_sort_recurrsion(array, partitionIndex + 1, high);
}

function partition(array: number[], low: number, high: number): number {
    const pivot = array[high];
    let index = low - 1;

    for (let i = low; i < high; i++) {
        if (array[i] <= pivot) {
            index++;
            const tmp = array[i];
            array[i] = array[index];
            array[index] = tmp;
        }
    }

    index++;
    array[high] = array[index];
    array[index] = pivot;
    return index;
}

export default function quick_sort(arr: number[]): void {
    quick_sort_recurrsion(arr, 0, arr.length - 1);
}
