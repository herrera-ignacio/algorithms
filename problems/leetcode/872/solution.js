/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const leaves1 = findLeavesArray(root1);
  const leaves2 = findLeavesArray(root2);
  return leaves1.length === leaves2.length && leaves1.every((node, idx) => node === leaves2[idx]);
};

const findLeavesArray = (root) => {
  let leaves = [];
  dfs(root, leaves);
  return leaves;
}

const dfs = (node, acc) => {
  if (node) {
      if (isLeaf(node)) {
          acc.push(node.val);
      } else {
          dfs(node.left, acc);
          dfs(node.right, acc);
      }
  }
}

const isLeaf = (node) => !node.left && !node.right;
