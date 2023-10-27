const graph = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E'],
};

function bfs(graph, start) {
  // empty graph
  if (!start) {
    return [];
  }

  const queue = [start];
  const visited = new Map();
  const result = [];

  while (queue.length > 0) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.set(vertex, true);
      // do something with vertex
      // in this case we'll simply print in-order traversal
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

console.log(bfs(graph, 'A'));
// [ 'A', 'B', 'D', 'C', 'E', 'F' ]
