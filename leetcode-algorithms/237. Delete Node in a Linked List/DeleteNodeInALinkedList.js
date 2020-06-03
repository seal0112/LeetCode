/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 解題概念: function只給了node, 沒有head, 而且不用回傳
 * 把下一個node複製給現在的node, 然後刪除下一個node, 就等同於刪除自己
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};