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
    if (!list1) return list2;
    if (!list2) return list1;

    let nextL1 = list1;
    let nextL2 = list2;
    let head;

    if (list1.val < list2.val) {
        head = list1;
        nextL1 = list1.next;
    } else {
        head = list2;
        nextL2 = list2.next;
    }

    head.next = mergeTwoLists(nextL1, nextL2);

    return head;
}
