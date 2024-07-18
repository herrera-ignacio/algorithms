// https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/
// solution based on https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5493798/ultimate-1-ms-solution-beats-100-java-c-py-js-go-beginner-friendly-explanation/
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
 * @param {number} distance
 * @return {number}
 */
const countPairs = function(root, distance) {
  let count = 0;
  const MAX_DISTANCE = 10;

  function dfs(node) {
    if (!node) return new Array(MAX_DISTANCE + 1).fill(0);

    if (!node.left && !node.right) {
      // leaf
      const res = new Array(MAX_DISTANCE + 1).fill(0);
      res[1] = 1;
      return res;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    for (let i = 1; i <= distance; i++) {
      for (let j = 1; j <= distance - i; j++) {
        // only leafs will have non-zero values
        count += left[i] * right[j];
      }
    }

    const res = new Array(MAX_DISTANCE + 1).fill(0);
    for (let i = 1; i < MAX_DISTANCE; i++) {
      res[i + 1] = left[i] + right[i];
    }

    return res;
  }

  dfs(root);

  return count;
};
