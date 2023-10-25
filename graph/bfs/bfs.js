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
 * @return {number[]}
 */
const bfs = (root) => {
  const queue = [];
  const visited = new Map(); // needed if its a graph

  // Covers the case where tree is empty
  if (root) {
    visited.set(root, true);
    queue.push(root);
  }

  while (queue.length > 0) {
    const node = queue.pop();

    // do something with node if you want
    
    if (node.left && !visited.has(node.left)) {
      visited.set(node.left, true);
      queue.push(node.left);
    }

    if (node.right && !visited.has(node.right)) {
      visited.set(node.right, true);
      queue.push(node.right)
    }
  }
}
