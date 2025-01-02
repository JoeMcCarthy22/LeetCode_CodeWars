/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

P: an array of integers
R: the value that appears an odd number of times
E: as above
Ps:
Iterate through the array and count how many times each value appears using a nested loop;
if count % 2 !== 0; return array[i]
*/

function findOdd(A) {
    // loop through the array
    for (let i = 0; i < A.length; i++){
      let count = 0
      
      // count the number of occurances of each value using a nested loop
      for (let v = 0; v < A.length; v++){
        if (A[i] == A[v]){
          count++;
        }
      }
      
      // check if the count is odd
      if (count % 2 !== 0){
        return A[i]
      }
    }
  }
      