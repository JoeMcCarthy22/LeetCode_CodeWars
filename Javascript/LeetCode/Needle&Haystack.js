/*28. Find the Index of the First Occurrence in a String
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}

 parameters - two strings, all lowercase. haystack and needle
 return - the index of the first occurance of needle, or -1 if not present
 example - as above
 pseudocode:
 - use indexOf method
 */
 var strStr = function(haystack, needle) {

    return haystack.indexOf(needle);
    
};