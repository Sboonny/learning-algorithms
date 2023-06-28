export default function compare(
    firstTree: BinaryNode<number> | null,
    secondTree: BinaryNode<number> | null,
): boolean {
    if (firstTree === null && secondTree === null) {
        return true;
    }

    if (firstTree === null || secondTree === null) {
        return false;
    }

    if (firstTree.value !== secondTree.value) {
        return false;
    }

    return (
        compare(firstTree.left, secondTree.left) &&
        compare(firstTree.right, secondTree.right)
    );
}
