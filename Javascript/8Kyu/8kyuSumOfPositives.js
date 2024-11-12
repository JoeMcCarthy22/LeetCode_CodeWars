/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
    // filter all the negative values out of the array
     let filter = arr.filter((x) => x > 0)
     // sum all of the remaining values together
     let sum = filter.reduce((acc, c) => acc + c, 0)
     return sum
   }