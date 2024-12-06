/* Challenge:
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
 */

/*
P: a two dimensional array of integers
R: Flattened Array in ascending order
E: As above
P: flatten the array
then return array.sort((a,b ) => a - b)
*/


function flattenAndSort(array) {
    array = array.flat()
    return array.sort((a, b) => a - b)
  }