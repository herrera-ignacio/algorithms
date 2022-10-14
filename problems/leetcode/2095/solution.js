// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time complexity O(n)
 * Space complexity O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteMiddle = function(head) {
  let i = 0;
  let map = {};
  let node = head;

  if (!head.next) {
      return null;
  }

  while (node) {
      /**
       * Can improve space complexity by removing the nodes that we know
       * have an index biggest than the current middle.
       */
      map[i] = node
      i++;
      node = node.next;
  }

  // Get middle and previous node
  const middle = Math.floor(i / 2);
  console.log(middle);
  const middleNode = map[middle];
  const previousNode = map[middle - 1];

  // Delete middle node
  if (previousNode) {
    // Skip node by pointing previous node to next node
    previousNode.next = middleNode.next;
  }

  // Remove its pointers to other nodes
  middleNode.next = null;

  return head;
};
