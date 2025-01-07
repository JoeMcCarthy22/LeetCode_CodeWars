/* Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26. */

/*
P: a nested array
R: Sum of the minimum values of each row
E: as above
Ps:
-sum of each row
-add the sums together
-sort each row
-keep track of the minimum at index 0
-add all the index 0 to eachother and return
*/

function sumOfMinimums(arr) {
  
    let sumOfMinimums = 0;
    
    for (let i = 0; i < arr.length; i++){
      arr[i] = arr[i].sort((a, b) => a - b)
      sumOfMinimums += arr[i][0]
    }
    return sumOfMinimums
  }