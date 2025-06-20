/* 83. Remove Duplicates from Sorted List
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Input: head = [1,1,2]
Output: [1,2] */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}

paramater is the head of a sorted link list
need to return the linked list sorted, with no duplicates
as the list is already sorted, duplicates will be consecutive
use a while loop to loop through
traverse the list with a pointer 
If the current node's value equals the next node's value, skip the next node.
otherwise move the pointer forward

 */
var deleteDuplicates = function(head) {

    let current = head;

    while (current && current.next){
        if (current.val == current.next.val){
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head
    
};