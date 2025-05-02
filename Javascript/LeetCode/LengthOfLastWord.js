/* 58. Length of Last Word
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.*/

/**
 * @param {string} s
 * @return {number}

 parameters = a strong consisting of words and spaces
 return = the length of the last word in the string. Words do not include spaces alone
 ex- as above

 Pseudocode:
 -split the string into an array by space s.split(' ')
 -if the last index !== " " then return last index.length
 - use a while loop to keep decreasing last index until !== " "
 */
 var lengthOfLastWord = function(s) {

    let arr = s.split(' ');
    let index = arr.length - 1;

    while (arr[index] === ""){
        index--; 
    }

    return arr[index].length;
};