// https://leetcode.com/problems/delete-node-in-a-linked-list/

/**
 * Definition for singly-linked list.
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * SOLUTION
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
  /**
   * Exercise assumption
   * The given node is not the tail of the list
   */
  const next = node.next;

  // Delete node by "cloning" the next node val and pointers
  node.val = next.val;
  node.next = next.next;

  // "Cut" next node
  next.next = null;
  next.val = null;
};


/**
 * TEST!
 */
const head = new ListNode(1);

const second = new ListNode(2);
head.next = second;

const third = new ListNode(5);
second.next = third;

const fourth = new ListNode(8);
third.next = fourth;

function printList(node) {
  const vals = [];
  while (node) {
    vals.push(node.val);
    node = node.next;
  }
  console.log(vals.join(','))
}

printList(head);
deleteNode(head);
printList(head);
