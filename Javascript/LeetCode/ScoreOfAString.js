/* 3110. Score of a String
You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.
Constraints:
2 <= s.length <= 100
s consists only of lowercase English letters.*/

/**
 * @param {string} s
 * @return {number}

 Parameter - a string, lowercase characters only
 Return - the absolute difference between the ASCII values of adjacent characters
 Example Input: s = "hello"
Output: 13
The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

Pseudocode:
-split the string into an array of letters
-use map to convert each letter into ASCII char code
-loop through the array, perform arr[i] - arr[i+1] and add the absoluite difference to a variable
-return Math.Abs(difference)
 */
var scoreOfString = function(s) {

    let arr = s.split('');
    let charCodes = arr.map(char => char.charCodeAt(0));

    let difference = 0;
    for (let i = 0; i < charCodes.length - 1; i++){
        difference += Math.abs(charCodes[i] - charCodes[i+1])
    }

    return difference
    
};