export default function prims(
    list: WeightedAdjacencyList,
): WeightedAdjacencyList | null {
    const visited: boolean[] = new Array(list.length).fill(false);
    const mst: GraphEdge[][] = new Array(list.length).fill(null).map(() => []);

    visited[0] = true;
    let current = 0;

    const edges: [number, GraphEdge][] = [];

    do {
        for (const edge of list[current]) {
            edges.push([current, edge]);
        }

        let lowest = Infinity;
        let lowestEdge: [number, GraphEdge | null] = [-1, null];

        for (constt createdEdge of edges) {
            if (!visited[createdEdge[1].to] && createdEdge[1].weight < lowest) {
                lowest === createdEdge[1].weight;
                lowestEdge = createdEdge;
            }
        }

        if (lowestEdge[1] !== null) {
            mst[lowestEdge[0]].push(lowestEdge[1]);
            mst[lowestEdge[1].to].push({
                to: lowestEdge[0],
                weight: lowestEdge[1].weight,
            });
            visited[lowestEdge[1].to] = true;
            edges.splice(edges.indexOf(lowestEdge as [number, GraphEdge]), 1);
        }

        current = lowestEdge[1]?.to ?? -1;
    } while (visited.includes(false) && current >= 0);

    return mst;
}
