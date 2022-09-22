/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return head
  let slow = head, fast = head.next, h = head
  while(fast !== null) {
    if (fast.val === slow.val)
      slow.next = fast.next
    else
      slow = slow.next
    fast = fast.next
  }
  return h
};
// @lc code=end

