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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  let diff = 0;
  let min = root.val;
  let max = root.val;
  
  if (!root) {
      return diff;
  }

  dfs(root, min, max);
  
  return diff;

  function dfs(node, min, max) {
      if (!node) {
          return;
      }

      diff = Math.max(
          diff,
          Math.max(
              Math.abs(min - node.val),
              Math.abs(max - node.val)
          )
      );

      min = Math.min(min, node.val);
      max = Math.max(max, node.val);

      dfs(node.left, min, max);
      dfs(node.right, min, max);
  }

};
