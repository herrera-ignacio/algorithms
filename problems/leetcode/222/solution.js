// https://leetcode.com/problems/count-complete-tree-nodes/

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
 function countNodes(root) {
  let lheight = 1;
  let lnode = root;
  let rheight = 1;
  let rnode = root;

  if (!root) return 0;

  while (lnode.left) {
    lheight++;
    lnode = lnode.left;
  }

  while (rnode.right) {
    rheight++;
    rnode = rnode.right;
  }

  if (lheight === rheight) return 2**lheight - 1;

  return 1 + countNodes(root.left) + countNodes(root.right);
}
