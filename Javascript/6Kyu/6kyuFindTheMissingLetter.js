/* Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P' */

/*
P: an array of consecutive letters
R: the missing letter
E: as above
Ps-
Use of charCodeAt
consider  => handle it all in upper case, then add a conditional at the end to sort it out

use map on the array and convert each letter to a number

loop through the array, and if the difference between two numbers != 1; return +1 from array[i]
convert back to a letter using charCodeAt() and return, be wary of casing

*/

function findMissingLetter(array){
  
    let numbers = array.map(letter => letter.toUpperCase().charCodeAt(0));
    let missingNumber;
    
    for (let i = 0; i < numbers.length - 1; i++){
      if (numbers[i+1] - numbers[i] !== 1){
         missingNumber = numbers[i] + 1;
        break;
      }
    }
    
    // convert back to a letter
    
    let missingLetter = String.fromCharCode(missingNumber)
    
    // return with conditional
    
    return array[0] === array[0].toUpperCase() ? missingLetter : missingLetter.toLowerCase()
    
    
  }