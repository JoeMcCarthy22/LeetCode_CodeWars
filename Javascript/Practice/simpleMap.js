/* Problem: Double the Numbers
You are given an array of numbers. Your task is to return a new array where each number is doubled.

Example:
javascript
Copy code
Input: [1, 2, 3, 4]  
Output: [2, 4, 6, 8] */

function doubleNumbers(n){
    return n.map(num => num * 2)
}