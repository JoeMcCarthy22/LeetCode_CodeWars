/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance. */

/*
P: array of numbers
R: the unique value
E: As above
Ps: 
sort the array in order
check if the first two, or the last two values are equal
*/

function findUniq(arr) {
    // sort the array in order
    arr.sort((a, b) => a - b)
    // check the first two numbers of the array first. if these are equal, then the last number is the unique value
    if (arr[0] !== arr[1]){
      return arr[0]
      } else {
        return arr[arr.length-1]
      }
    }
  