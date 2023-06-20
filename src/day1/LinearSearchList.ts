export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let pick of haystack) {
        if (pick === needle) {
            return true;
        }
    }
    return false;
}
