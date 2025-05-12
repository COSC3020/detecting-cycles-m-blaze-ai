function hasCycle(graph) {
    const parent = {};

    function find(x) {
        if (parent[x] === undefined) parent[x] = x;
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    }

    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX === rootY)
            return false;
        parent[rootX] = rootY;
        return true;
    }

    const seenEdges = new Set();
    
    for (let [u, neighbors] of Object.entries(graph)) {
        for (let v of neighbors) {
            const edgeKey = [u, v].sort().join(",");

            if (seenEdges.has(edgeKey))
                continue;
            seenEdges.add(edgeKey);

                if (!union(u, v)) {
                    return true;
                }
            }
        }

    return false;
}
