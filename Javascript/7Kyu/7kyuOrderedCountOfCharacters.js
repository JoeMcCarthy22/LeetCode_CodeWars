/*
P: a string
R: an array of tuples, with the count of each character

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2],

Ps:
split input text into an array
use a hashmap
loop through
update counts

once loop finished , push to result array
loop again, this time for each count, push [key, value] to result

*/


const orderedCount = function (text) {
  
  if (text.length == 0) return [];
  
  let counts = {};
  text = text.split('');
  
  for (let i = 0; i < text.length; i++){
    let char = text[i];
    if (counts[char] == undefined){
      counts[char] = 1;
    } else {
      counts[char]++
    }   
  }
  
  let result = [];
  
   let seen = {};
  
  for (let i = 0; i < text.length; i++){
    let char = text[i];
    
    if (!seen[char]) {
      result.push([char, counts[char]]);
      seen[char] = true;
    }
  }
  
  return result
  
  
}