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
const dfsTree = (root) => {
  // we'll print tree as an example;
  const result = [];

  // empty tree
  if (!root) {
    return result;
  };

  const stack = [root];

  while (stack.length > 0) {
    const vertex = stack.pop();
    result.push(vertex.val);

    if (vertex.right) {
      stack.push(vertex.right);
    }

    // we'll traverse left branch first
    if (vertex.left) {
      stack.push(vertex.left);
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
