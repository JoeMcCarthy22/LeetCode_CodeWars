/*
Task
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.

parameters are the array, and then the position of n
need to return the nth smallest element of the array
need to sort asc
indexing starts at 0, so find the element at the index of pos-1 and return
*/


function nthSmallest(arr, pos){
  
  let nth = pos - 1;
  
  let sorted = arr.sort((a, b) => a - b);
  
  return sorted[nth]
}