/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

P: string
R: string, every other word reversed
E: "I went to the shops" => "I tnew to eht shops"
Ps:
-trim any whitespace off the input string
-str.split(' ') into array of words
-map - if index % 2 !== 0; then reverse
-join and return
*/

function reverse(str){
  
    str = str.trim();
    let arr = str.split(' ');
    
    let reversed = arr.map((word, index) => index % 2 !== 0 ? word.split('').reverse().join('') : word)
    
    return reversed.join(' ')
    
  }