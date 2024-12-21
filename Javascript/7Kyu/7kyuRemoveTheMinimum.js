/* The museum of incredibly dull things
Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5] */

/*
P: array of integers
R: The array, but remove the smallest one, do not mutate the original array
E: As above
Ps:
Make a secondary copy of the array, sort it, 
use indexOf on the smallest element of array copy,
remove this from the original array
*/

function removeSmallest(numbers) {
    // Create a copy of the array
    let copy = [...numbers];
  
    // Find the smallest element
    let smallest = Math.min(...copy);
  
    // Find the index of the first occurrence of the smallest element
    let index = numbers.indexOf(smallest);
  
    // Return a new array excluding the element at that index
    return numbers.filter((_, i) => i !== index);
  }
  