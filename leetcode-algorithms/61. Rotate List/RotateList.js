/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 解題概念: 因為是rotate, 所以轉的次數等於node數量時, 等於沒轉
 *          往右轉N次 會等於 往左轉node的數量-N次
 * 先計算整個list的長度, 然後走到最尾巴(last node)的時候把last node的next指回head,
 * 這樣就得到一個circular list, 這樣等一下找到新的head(new head)時, 就不用再串尾巴回到一開始的head
 * 另外由於是list, 所以每個node沒辦法找到前一個node, 我們讓head走到新的head的前一個位置, 指定一個newHead準備回傳
 * 然後把head的next設為null, 這樣就完成題目所要的list了
 *
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k===0){
        return head
    }
    let length = 1;
    let node = head;
    while(node.next!==null){
        length++;
        node = node.next;
    }
    node.next = head;
    k = k%length

    let step = length-k-1
    while(step>0){
        head = head.next;
        step--;
    }
    const newHead = head.next;
    head.next = null
    return newHead
};