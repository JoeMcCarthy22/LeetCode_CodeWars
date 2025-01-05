/* You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

/* P: two arrays of strings
R: The maximum difference between any 2 strings across both arrays
E: As above
Ps: 
-Sort the arrays by length
-if a1 or a2 = empty return -1 (arr.length == 0)
-if (a1[a1.length-1] - a2[0]) > (a2[a2.length-1] - a1[0]) return (a1[a1.length-1] - a2[0])
- else if (inverse)
*/

function mxdiflg(a1, a2) {
    // sort the arrays by length
    a1 = a1.sort((a, b) => a.length - b.length);
    a2 = a2.sort((a, b) => a.length - b.length);
    
    // return -1 if the arrays are empty
    if (a1.length == 0 || a2.length == 0){
      return -1
    }
  
    // calculate the maximum differences 
    if ((a1[a1.length-1].length - a2[0].length) > (a2[a2.length-1].length - a1[0].length)){
      return (a1[a1.length-1].length - a2[0].length)
    } else {
      return (a2[a2.length-1].length - a1[0].length)
    }
  
}