/* Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

Examples
[1, 2, 3] returns 6 */

/*
P: array of integers
R: Maximum product of 2 adjacent numbers in the array
E: As above
P: 
Initiate a maximumProduct
Loop through the array, multiplying i by i-1
if result > score, then reassign score
return maximumProduct
*/

function adjacentElementsProduct(array) {
    let maximumProduct = array[0] * array[1];
    // loop through the array, multiplying i by i-1 (start i at 1)
    for (let i = 1; i < array.length; i++){
      let result = array[i] * array[i-1];
      // update the maximum product if it is higher
      if (result > maximumProduct){
        maximumProduct = result
      }
    }
    return maximumProduct
  }