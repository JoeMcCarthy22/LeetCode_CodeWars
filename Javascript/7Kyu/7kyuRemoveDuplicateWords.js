/* Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output:
'alpha beta gamma delta' */

/*
a string of words is the input (s)
need to return the string, removing any dupes
example - as above
-split the string into an array of words
-create a new array 
-loop through input string, if !new array.includes(word) then push 
-join the new array and return
*/

function removeDuplicateWords (s) {
  
  let inputArr = s.split(' ');
  let outputArr = [];
  
  for (let i = 0; i < inputArr.length; i++){
    let word = inputArr[i];
    if (!outputArr.includes(word)){
      outputArr.push(word)
    }
  }
  
  return outputArr.join(' ');
}