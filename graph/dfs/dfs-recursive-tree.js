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
const dfsTree = (root, result = []) => {
  // Print in-order traversal as an example
  if (root) {
    // do something with root
    result.push(root.val);

    // traverse left branch first
    if (root.left) {
      dfsTree(root.left, result);
    }
  
    if (root.right) {
      dfsTree(root.right, result);
    }
  }

  return result;
}

const node1 = { val: "A" };
const node2 = { val: "B" };
const node3 = { val: "C" };
node1.left = node2;
node1.right = node3;
const node4 = { val: "D" };
node2.left = node4;
const node5 = { val: "E" };
node4.right = node5;

console.log(dfsTree(node1));
// [ 'A', 'B', 'D', 'E', 'C' ]
