/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    if (!list1) return list2
    if (!list2) return list1

    let nodeL1 = list1
    let nodeL2 = list2
    let prehead = {}
    let prev = prehead

    while (nodeL1 && nodeL2) {
        if (nodeL1.val < nodeL2.val) {
            prev.next = nodeL1
            nodeL1 = nodeL1.next
        } else {
            prev.next = nodeL2
            nodeL2 = nodeL2.next
        }
        prev = prev.next
    }

    prev.next = nodeL1 ? nodeL1 : nodeL2

    return prehead.next
};
