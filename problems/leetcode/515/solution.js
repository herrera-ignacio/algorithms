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
const largestValues = (root) => {
  // We use BFS
  const queue = [];
  const max = [];

  if (root) {
    // covers case where tree is empty
    queue.push([root, 0]); // [node, row]
  }

  while (queue.length > 0) {
    const [node, row] = queue.pop();
    
    if (max[row] === undefined || node.val > max[row]) {
      max[row] = node.val;
    }

    if (node.left) {
      queue.push([node.left, row + 1]);
    }

    if (node.right) {
      queue.push([node.right, row + 1])
    }
  }

  return max;
}
