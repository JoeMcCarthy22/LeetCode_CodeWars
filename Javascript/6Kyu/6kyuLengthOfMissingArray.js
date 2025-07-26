/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.



parameter is an array of arrays
need to return the length of the missing array
-handle edge case for empty array or inpit == 0
-sort the input array
-loop through the input array

-if a sub array is null or empty, return 0
-if there is a difference of >1 between consecutive arrays, return the difference
*/

function getLengthOfMissingArray(arrayOfArrays) {
  
  if (!arrayOfArrays || arrayOfArrays.length === 0) return 0;
  
  for (let sub of arrayOfArrays) {
    if (!sub || sub.length === 0) return 0;
    }
  
  let sorted = arrayOfArrays.sort((a, b) => a.length - b.length);
  
  for (let i = 0; i < sorted.length - 1; i++){
    let current = sorted[i];
    let next = sorted[i + 1];
    let difference = (next.length - current.length);
    
    
    if (difference !== 1) return current.length + 1;
    
  }
  
  
}
