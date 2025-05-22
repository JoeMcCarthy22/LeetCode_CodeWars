/* 66. Plus One
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].*/

/**
 * @param {number[]} digits
 * @return {number[]}

 Parameter is an array of digits
 need to increment the array of digits by +1 and then return as an array
 E: as above
 edge case - 9 -> 10
 pseudocode:
 - join the array into a number 
 - add one to the number
 - convert to string
 -split the number back into an array, map to number and returns
 */
var plusOne = function(digits) {

    let number = Number(digits.join(''));
    number += 1;
    let numStr = number.toString();
    return numStr.split('').map(Number);
    
};