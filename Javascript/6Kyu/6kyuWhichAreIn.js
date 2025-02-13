/*Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"] */

/*
P: two arrays of strings
R: a sorted alphabetically array of substrings of a1 that are in a2
E: as above
Ps:
-filter array1
-check if array2 includes array1
-sort and return array1
*/

function inArray(array1,array2){
    return array1
          .filter(word => array2.some(str => str.includes(word)))
          .sort();
  }