/*
Write a function that given an integer n >= 0, returns an array of n ascending length subarrays, all filled with 1s.

0 => [ ]
1 => [ [1] ]
2 => [ [1], [1, 1] ]
3 => [ [1], [1, 1], [1, 1, 1] ]
parameter is an integer => 0
return an array of n ascending length subarrays, all filled with 1s
example as above
-let array = []
-use a loop from 0 to n
-let subarray = [1]
-push subarray to array
-then need to push '1' to subarray
*/

function pyramid(n) {
  
  let array = [];
  
  if (n === 0) return array;
  
  for (let i = 1; i <= n; i++){
    let subArray = new Array(i).fill(1);
    array.push(subArray);
  }
  
  return array
}