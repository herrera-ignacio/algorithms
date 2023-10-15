function dijkstra(graph, costs) {
  let processed = new Set();
  let parents = {};

  // Find the lowest cost node that you haven't processed yet
  let node = findLowestCostNode(costs, processed);
  
  while(node !== undefined) {
    let cost = costs[node];
    // Note that neighbors is a hash table that maps each neighbor to its cost
    let neighbors = graph[node];

    // Go through all the node's neighbors
    for (const n of Object.keys(neighbors)) {
      const newCost = cost + neighbors[n];

      // If it's cheaper to get to this neighbor
      // by going through this node
      if (newCost < costs[n]) {
        // Update the cost
        costs[n] = newCost;
        // This node becomes the "most optimal" parent for this neighbor
        parents[n] = node;
      }
    }

    processed.add(node);

    // Find the next node to process
    node = findLowestCostNode(costs, processed);
  }

  // You can find the shortest path by traveling backwards
  // from the end node
  return parents;
}

/**
 * 
 * @param {Object} costs 
 * @param {Set} processed 
 * @returns 
 */
function findLowestCostNode(costs, processed) {
  let lowestCostNode = undefined;
  let lowestCost = Number.MAX_VALUE;

  for (const node of Object.keys(costs)) {
    if (processed.has(node)) {
      continue;
    }

    const cost = costs[node];

    if (cost < lowestCost) {
      lowestCostNode = node;
      lowestCost = cost;
    }
  }

  return lowestCostNode;
}

/**
 * Travel parents staring from end
 * to print the shortest path.
 */
function printShortestPath(parents) {
  const shortestPath = ["end"];
  let node = parents.end;

  while (node !== undefined) {
    shortestPath.push(node);
    node = parents[node];
  }
  
  shortestPath.push("start");

  console.log("Shortest path:")
  console.log(shortestPath.reverse().join(' -> '));
}

/**
 * - Objective:
 * Calculate the min cost for getting to a neighbor
 * - Assumptions:
 * 1) Starting node is called "start".
 * 2) Ending node is called "end".
 * 3) The graph has no cycles.
 * 4) The graph has positive-weight edges only.
 */

// Note that a given node maps to a hash table with its neighbors
// and the cost it takes to travel to each of them.
const graph = {};
graph.start = {}; // start will have two neighbors -> its keys
graph.start.a = 6; // 6 minutes to get to "a" from start
graph.start.b = 2;
graph.a = { "end": 1 }; // 1 neighbor
graph.b = { "a": 3, "end": 5 }; // 2 neighbors
graph.end = {}; // no neighbors

// The cost is how long it takes to get to a node from the start
// if you don't know the cost yet, you put down a max value
const costs = {
  a: 6,
  b: 2,
  end: Number.MAX_VALUE
};


const parents = dijkstra(graph, costs);
printShortestPath(parents);
