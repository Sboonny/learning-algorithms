const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    const isOffTheMap =
        current.x < 0 ||
        current.x >= maze[0].length ||
        current.y < 0 ||
        current.y >= maze.length;
    if (isOffTheMap) return false;

    const isOnTheWall = maze[current.y][current.x] === wall;
    if (isOnTheWall) return false;

    const isAtTheEnd = current.x === end.x && current.y === end.y;
    if (isAtTheEnd) {
        path.push(end);
        return true;
    }

    const isTraversedPoint = seen[current.y][current.x];
    if (isTraversedPoint) return false;

    seen[current.y][current.x] = true;
    path.push(current);

    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: current.x + x,
                    y: current.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
