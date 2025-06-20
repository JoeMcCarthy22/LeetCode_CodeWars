/* 141. Linked List Cycle
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}

 parameter = head of a linked list of numbers
 return true if there is a cycle (i.e there is a node that can be reached again by following the next pointer)
 pseudocde:
 - let current = head;
 - while current
 - need to store previous nodes in an array = seen = [];
 - if seen.includes(current.next) return true
 - othwersie push to current and update to current.next
 */
var hasCycle = function(head) {

    let current = head;
    let seen = [];

    while (current){

        if (seen.includes(current)){
            return true;
        }
        seen.push(current);
        current = current.next;
    }

    return false
       
    
};