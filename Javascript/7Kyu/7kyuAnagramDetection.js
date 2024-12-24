/* An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" */

/*
P: two words,
R: True if anagram, case insesnitive
E: as above
Ps: Split, sort, join, to lower case
they should be === equal if anagram
*/

// write the function isAnagram
var isAnagram = function(test, original) {
    // split, sort, join, to lower case on both words - this makes them as similar as possible for comparison
    test = test.toLowerCase().split('').sort().join('')
    original = original.toLowerCase().split('').sort().join('')
    
    // comparison operation
    return test === original
    
  };
  