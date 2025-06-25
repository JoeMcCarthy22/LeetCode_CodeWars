/* 242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

 given two strings, return true if anagram - same letters in each word
 example as above
 strings are immutable,
 so split the strings into arrays, sort, and join
 compare, return true if ==
 */
var isAnagram = function(s, t) {

    return s.split('').sort().join('') === t.split('').sort().join('');

};