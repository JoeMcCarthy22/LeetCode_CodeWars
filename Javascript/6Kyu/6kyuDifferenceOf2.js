/*
Difference of 2:
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]
[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

Parameter is an array of integers
return an array of pairs where there is a difference of 2
ex as above



*/

function twosDifference(input){
  
  let output = [];
  let sorted = input.sort((a, b) => a - b);
  
  for (let num of sorted){
    if (sorted.includes(num + 2)){
      output.push([num, num + 2])
    }
  }
 
  
  return output
}