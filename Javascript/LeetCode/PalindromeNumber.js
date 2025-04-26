/* 9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Constraints:
-231 <= x <= 231 - 1
Follow up: Could you solve it without converting the integer to a string? */

/**
 * @param {number} x
 * @return {boolean}

parameter is an integer - neg or pos
return true if palindrome (reads the same forwards + backwards), false if not
example 151 -> true, 234 -> false

simple way:
convert x into a string using toString
split, reverse, and join
if new string == x return true


*/

var isPalindrome = function(x) {

    let numStr = x.toString();
    let reverse = numStr.split('').reverse().join('')

    return reverse == x  
};