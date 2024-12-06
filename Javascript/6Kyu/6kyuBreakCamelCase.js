/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

/*
P: camelCasedWords in a singlular string?
R: The words seperated by a space (string)
E: As above
Ps: 
Loop through the input string characters
if char = CAPITAL, then split it , create an array to store in
this creates an array, so join them back together with a ' '
*/

function solution(string) {
    // create an array to store the words in 
    let words = [];
    // create a last Index variable to keep track of 
    let lastIndex = 0
    // loop through the input string
    for (let i = 0; i < string.length; i++){
      // if a character is a capital, split the string, and push to array
      if (string[i] === string[i].toUpperCase()){
        words.push(string.slice(lastIndex, i))
        lastIndex = i
      }
    }
    // push the last remaining word to the array
    words.push(string.slice(lastIndex))
    
    // this creates an array of all the words. They must be joined before returning 
    return words.join(' ');
  }