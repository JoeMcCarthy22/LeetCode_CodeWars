/* Challenge: Sum of The Two Lowest Positive Integers
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or empty arrays will be passed to the function.

Example:

sumTwoSmallestNumbers([19, 5, 42, 2, 77]) // returns 7
*/

/* P: an array of min 4 positive integers
R: sum of two smallest integers
E: as above
Ps: sort the array
return array[0] + array[1] */

function sumTwoSmallestNumbers(array){
    let array2 = array.sort((a, b) => a - b)
    return array2[0] + array2[1]
}