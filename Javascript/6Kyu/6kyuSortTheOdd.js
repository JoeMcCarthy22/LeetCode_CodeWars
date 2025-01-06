/* You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

/*
P: array
R: Return the array, odd numbers asc, even numbers in original positions
E: As above
Ps: 
remove the odds and sort, 
return to original array, iterate through, if value is odd, replace
use an index of odds to keep track
*/

function sortArray(array) {
    // filter + sort the odds to a new array
    let odds = array
              .filter(num => num % 2 !== 0)
              .sort((a, b) => a - b);
    
    // initialise oddsIndex
    let oddsIndex = 0;
    
    // iterate through the original array - if array[i] is odd, replace it with odds[oddsIndex],
    for (let i = 0; i < array.length; i++){
      if (array[i] % 2 !== 0){
        array[i] = odds[oddsIndex];
        oddsIndex++
      } 
    }
    
    return array
    
  }