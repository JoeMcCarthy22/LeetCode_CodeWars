/* Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.

P: array of integers
R: values of the array that are even
E: [2,3,4,5] => [2,4]
Ps:
use filter( x % 2 == 0)
*/

function noOdds( values ){
    return values.filter(x => x % 2 == 0)
  }