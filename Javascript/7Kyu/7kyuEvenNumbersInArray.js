/* Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8] 

/*
P: an array of numbers, number (length of array to return)
R: array of length number; containing the last number even numbers
E: as above
Ps:
-filter the original array for even numbers
-return the last 3 using push and a while loop
*/


function evenNumbers(array, number) {
  
    let evens = array.filter(x => x % 2 == 0);
    
    let result = [];
    
    while (result.length < number){
      result.push(evens[evens.length-1])
      evens.pop()
    }
    
    return result.reverse()
    
  }