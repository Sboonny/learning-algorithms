import prims from "@code/PrimsList";
import { list1 } from "./graph";

// ToDo: figure out a way to test the graph similar to his graph here https://www.youtube.com/watch?v=om4nY7nQyBQ&t=2228s

test("PrimsAlgorithm", function () {
    // there is only one right answer for this graph
    expect(prims(list1)).toEqual([
        [
            { to: 2, weight: 1 },
            { to: 1, weight: 3 },
        ],
        [
            { to: 0, weight: 3 },
            { to: 4, weight: 1 },
        ],
        [{ to: 0, weight: 1 }],
        [{ to: 6, weight: 1 }],
        [
            { to: 1, weight: 1 },
            { to: 5, weight: 2 },
        ],
        [
            { to: 4, weight: 2 },
            { to: 6, weight: 1 },
        ],
        [
            { to: 5, weight: 1 },
            { to: 3, weight: 1 },
        ],
    ]);
});
