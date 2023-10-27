const graph = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E'],
};

// We'll just print in-order traversal for this example
const result = [];

/**
 * Example for a graph
 * @param {Node} root 
 */
const dfs = (node, visited = new Map()) => {
  // Covers the case where tree is empty
  if (node) {
    visited.set(node, true);
    // do something with node in this case we add to result
    result.push(node);

    for (let neighbor of getNeighbors(node, graph)) {
      if (!visited.has(neighbor)) {
        // do something with neighbor
        dfs(neighbor, visited)
      }
    }
  }
}

/**
 * Assumes it gets neighboors from a root node
 * It depends on how the graph adjency list is implemented
 * @param {Node} node 
 * @returns {Node[]}
 */
function getNeighbors(node, graph) {
  return graph[node];
}


dfs('A');
console.log(result);
// [ 'A', 'B', 'C', 'E', 'D', 'F' ]
