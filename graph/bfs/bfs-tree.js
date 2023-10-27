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

  // Covers the case where tree is empty
  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    const node = queue.shift();
    // do something with node if you want
    
    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right)
    }
  }
}
