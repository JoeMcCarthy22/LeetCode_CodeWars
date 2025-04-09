/* Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

Examples
[1, 3, 1] ==> 13
[5, 7, 5, 9, 7] ==> 579
[1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679 */

/*
P: an array of digits
R: the smallest number using the digits only once
E: as above
Ps:
- sort the array in ascending order
- turn all the digits into strings for ease of concatenation
- create a result array (empty) ""
- loop through the array, and if the !result string.includes( array[i] ), then push to the result
- join the string, convert the string back to a number + return
*/

function minValue(values){
  
    values.sort((a, b) => a - b);
    let numStrings = values.map(num => num.toString());
    
    let resultArray = [];
    
    for (let i = 0; i < numStrings.length; i++){
      if (!resultArray.includes(numStrings[i])){
        resultArray.push(numStrings[i])
      }
    }
    
    let stringArray = resultArray.map(str => Number(str));
    
    return Number(stringArray.join(''))
    
    
  }