/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

P: array of integers 0-9
R: a string of those numbers in phone number form
E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
Ps:
Create an empty string to return
use template literals to fill the gaps, using index values to access the numbers
*/

function createPhoneNumber(numbers){
    let result = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    return result 
    
  }