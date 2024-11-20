/* Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6] */

var capitals = function (word) {
	// create an array to return
  let array = [];
  
  // loop through the string
  for (let i = 0; i < word.length; i++){
   // if char[i] === char[i].toUpperCase(), then push i to the new array 
    if (word[i] === word[i].toUpperCase()){
      array.push(i)
      }
  }
  
  return array
  
};

/*
P: String of upper and lower case letters
R: An ordered list containign all the indices of the capital letters
E: "CodEWaRs" --> [0,3,4,6]
PS: 
create an array to return

loop through the string. 
if char[i] === char[i].toUpperCase(), then push i to the new array 

return the array

*/