/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
P: array of words
r: an array of the numnbers of letters that occupy their position in alphabet 

Ps:
loop through the array and then loop through each word
if there is a match, count++
use charCodeAt() - 95
push counts to output array


*/

function solve(arr){  
  let output = [];
  
  for (let i = 0; i < arr.length; i++){
    let word = arr[i];
    let count = 0;
    
    for (let j = 0; j < word.length; j++){
      let char = word[j].toLowerCase();
      if (j + 1 == (char.charCodeAt(0) - 96)){
        count++
      }
    }  
     output.push(count)    
  }
  
   return output
};