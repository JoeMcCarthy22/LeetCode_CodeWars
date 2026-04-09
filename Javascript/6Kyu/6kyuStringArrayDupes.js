/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Parameter will be an array of lowercase strings
need to return the array with all consec dupes removed from each letter

-loop through the array
-then nested loop through each word
-if word[i] == word[i+1]
-use a stack or just indices?
-indices maybe easier
-replace the letter with  special char '@'

Or 

build a new string,
only add char if different to next one

filter for the special char then return



*/

function dup(s) {
  
  let output = [];
  
  for (let i = 0; i < s.length; i++){
    let word = s[i].split('');
    let newWord = [];
    
    for (let j = 0; j < word.length; j++){
      let current = word[j];
      let prev = word[j-1];
      if (current !== prev){
        newWord.push(current);
      } 
    }
    
    output.push(newWord.join(''))

  }
  
  return output;
};