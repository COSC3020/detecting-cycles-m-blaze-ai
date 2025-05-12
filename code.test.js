const fs = require('fs');
eval(fs.readFileSync('code.js') + '');

function testHasCycle() {
    const acyclicGraph = {
        'A': ['B'],
        'B': ['A', 'C'],
        'C': ['B']
    };

    const cyclicGraph = {
        'A': ['B', 'C'],
        'B': ['A', 'C'],
        'C': ['A', 'B']
    };

    const mixedGraph = {
        'A': ['B'],
        'B': ['A', 'C'],
        'C': ['B', 'A'],
        'D': ['E'],
        'E': ['D']
    };

    console.assert(hasCycle(acyclicGraph) === false, "Test 1 Failed.");
    console.assert(hasCycle(cyclicGraph) === true, "Test 2 Failed.");
    console.assert(hasCycle(mixedGraph) === true, "Test 3 Failed.");

    console.log("All tests passed.");
}

testHasCycle();