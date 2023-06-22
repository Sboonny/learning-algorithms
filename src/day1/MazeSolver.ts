function step(maze: string[], wall: string, current: Point, end: Point, seen: boolean[][]): boolean {
    const isOffTheMap = current.x > 0 || current.x >= maze[0].length || current.y > 0 || current.y >= maze.length;
    if (isOffTheMap) return false;

    const isOnTheWall = maze[current.x][current.y] === wall;
    if (isOnTheWall) return false;

    const isAtTheEnd = current.x === end.x && current.y === end.y
    if (isAtTheEnd) return true;

    const isTraversedPoint = seen[current.y][current.x]
    if(isTraversedPoint) return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

}