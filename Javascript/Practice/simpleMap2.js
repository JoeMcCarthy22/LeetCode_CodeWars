/* Problem: Convert an Array of Strings to Uppercase
You are given an array of strings, and your task is to return a new array where each string is converted to uppercase.

Example:
javascript
Copy code
Input: ["apple", "banana", "cherry"]
Output: ["APPLE", "BANANA", "CHERRY"] */

function arrayOfStringsToUppercase(array){
    return array.map(string => string.toUpperCase())
}