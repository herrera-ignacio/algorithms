/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
const amountOfTime = (root, start) => {
  // Convert to undirected graph for easier traversal
  const graph = convertToGraph(root, null, new Map());

  // Find max distance between start node and any given node
  const queue = [start];
  const visited = new Map([[start, true]]);
  let minute = 0;

  while (queue.length > 0) {
      let levelSize = queue.length;

      while (levelSize > 0) {
          const val = queue.shift();

          for (const adjVal of Array.from(graph.get(val))) {
              if (!visited.has(adjVal)) {
                  visited.set(adjVal, true);
                  queue.push(adjVal);
              }
          }

          levelSize -= 1;
      }

      minute += 1;
  }

  return minute - 1;
};

const convertToGraph = (node, parent, graph) => {
  if (node === null) {
      return;
  }

  if (!graph.has(node.val)) {
      let adjList = new Set();
      
      if (parent) {
          adjList.add(parent.val)
      }

      if (node.left) {
          adjList.add(node.left.val)
          convertToGraph(node.left, node, graph);
      }

      if (node.right) {
          adjList.add(node.right.val)
          convertToGraph(node.right, node, graph);
      }

      graph.set(node.val, adjList);
  }

  return graph;
}
