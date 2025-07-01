/* 
Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"*/

/*
taking in a string of 26 unique alphabetical characters
return the characters in alphabetical order in a STRING
example as above
-strings are immutable
-split the input str to an array
-sort the array and join 
-return
*/

function sortGiftCode(code){
  let arr = code.split('');
  return arr.sort().join('').toString()
}
