/*

Description:
Write a function that takes a string and returns an array of the repeated characters (letters, numbers, whitespace) in the string.

If a charater is repeated more than once, only show it once in the result array.

Characters should be shown by the order of their first repetition. Note that this may be different from the order of first appearance of the character.

Characters are case sensitive.

For F# return a "char list"

P - string
R - an array of the repeated characters in order
E - as above
P - 
Create a result array
split the input string into an array
create another array to keep track of 'seen' characters
use map and push to result array or for loop?
*/

function remember(str) {
    let seenCharacters = [];
    let result = [];
    let arr = str.split('')
    
    for (let i = 0; i < arr.length; i++){
      let char = arr[i];
      if (seenCharacters.includes(char)){
        if (!result.includes(char)){
          result.push(char)
        }
      } else {
      seenCharacters.push(char)
    } 
    }
    return result
  
  }