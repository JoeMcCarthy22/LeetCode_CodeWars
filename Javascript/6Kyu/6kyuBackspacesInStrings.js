/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.


parameter is a string
need to return the same string, but with '#' and the preceding character removed
ex "abc#d##c"      ==>  "ac"
-strings are immutable - so we need to split into an array
-let arr = s.split('');
-establish a result array
-loop through the input array
-if arr[i] == # then we need to .pop() the last element out the array,
else push arr[i] to array
-join and return
*/


function cleanString(s) {
  
  let inputArr = s.split('');
  let resultArr = [];
  
  for (let i = 0; i < inputArr.length; i++){
    if (inputArr[i] === '#'){
      resultArr.pop();
    } else {
      resultArr.push(inputArr[i])
    }
  }
  
  return resultArr.join('');
 

}