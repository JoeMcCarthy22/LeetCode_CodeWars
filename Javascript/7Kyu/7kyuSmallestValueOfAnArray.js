/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

Some examples:

([1,2,3,4,5], "value") should return 1
([1,2,3,4,5], "index") should return 0

P: an array with at least 1 num, no dupes
   string of either two values - value or index
R: if toReturn = 'value' => smallest value of that array
  if 'index' => return the index of the smallest value
E: as above
Ps:
    -sort the array asc
    -if value return arr[0]
    -if index return indexOf

*/


function min(arr, toReturn) { 
    
    let arr2 = arr.slice()
  
    let smallest = arr2.sort((a, b ) => a - b)[0];
    if (toReturn === 'value'){
      return smallest
    } else {
      return arr.indexOf(smallest)
    }
}