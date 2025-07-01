/*/*
parameter is a positive integer, n
need to return the sum of all the cubed values from 1 to n inclusive
example 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
-loop from 1 to n
-push the cubed values to an array
.reduce() on the array and return
*/

function sumCubes(n){
  
  let cubes = [];
  
  for (let i = 1; i <= n; i++){
    cubes.push(i ** 3);
  }
  
  return cubes.reduce((acc, c) => acc + c, 0);
}