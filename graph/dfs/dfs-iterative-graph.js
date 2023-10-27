//https://www.algorithms-and-technologies.com/dfs/javascript

const graph = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E'],
};

/**
 * 
 * @param {Node} node 
 */
const dfsGraph = (node) => {
  // We'll just print in-order traversal
  const result = [];
  const visited = new Map();

  if (!node) {
    return result;
  }

  const stack = [node];

  while (stack.length > 0) {
    const vertex = stack.pop();

    if (!visited.has(vertex)) {
      // do something with vertex if you want
      visited.set(vertex, true);
      result.push(vertex);

      for (let neighbor of getNeighbors(vertex, graph)) {
          stack.push(neighbor);
      }
    }
  }

  return result;
}

/**
 * Assumes it gets neighboors from a root node
 * It depends on how the graph adjency list is implemented
 * @param {Node} root 
 * @returns {Node[]}
 */
function getNeighbors(node, graph) {
  return graph[node];
}

const result = dfsGraph('A');
//[ 'A', 'D', 'E', 'F', 'B', 'C' ]
console.log(result);
