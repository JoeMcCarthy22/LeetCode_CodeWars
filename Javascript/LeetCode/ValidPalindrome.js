/* 125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.*/

/**
 * @param {string} s
 * @return {boolean}
Parameters = s - a string, ASCII characters only
Return = true or false if palindrome, after removing all non-alphanumeric characters (anything not a letter or number)
Example Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Pseudocode:
- remove all non alphanumeric characters
- remove all non alphanumeric - use .replace([^a-zA-Z0-9]/g, '');
-split, reverse and join. Then compare and return

 */
var isPalindrome = function(s) {

    s = s.toLowerCase()
    let alphaNumeric = s.replace(/[^a-zA-Z0-9]/g, '');
    let alphaNumericReverse = alphaNumeric.split('').reverse().join('');

    return alphaNumeric === alphaNumericReverse;

    
};