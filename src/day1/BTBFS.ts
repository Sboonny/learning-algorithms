export default function bfs(
    head: BinaryNode<number> | null,
    needle: number,
): boolean {
    const queue = [head];

    while (queue.length) {
        const curr = queue.shift();
        if (!curr) {
            continue;
        }
        if (curr.value === needle) {
            return true;
        }
        queue.push(curr.left);
        queue.push(curr.right);
    }
    return false;
}
