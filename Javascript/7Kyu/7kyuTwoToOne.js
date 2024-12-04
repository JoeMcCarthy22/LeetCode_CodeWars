/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

/* 
P: two strings
R: a new sorted string longest possible unique characters
E: As above
P: Create a new string
loop through s1. If character not in new String, add it
loop through s2. If character not in new string, add it
Sort and return new string
*/


function longest(s1, s2) {
    let newString = ''
    // loop through s1 and add characters to newString
    for (let i = 0; i < s1.length; i++){
      if (!newString.includes(s1[i])){
        newString += s1[i]
      }
    }
    // do the same for s2
    for (let i = 0; i < s2.length; i++){
      if (!newString.includes(s2[i])){
        newString += s2[i]
      }
    }
    // split, sort, join and return newString
    return newString.split('').sort().join('')
  }