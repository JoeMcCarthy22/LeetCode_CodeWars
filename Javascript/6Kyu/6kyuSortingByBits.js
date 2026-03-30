/*
In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

E.g Given the array [7, 6, 15, 8]

7 has 3 on bits (000...0111)
6 has 2 on bits (000...0110)
15 has 4 on bits (000...1111)
8 has 1 on bit (000...1000)
So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real values instead.

E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

Your task is to write a function that takes an array of integers and sort them as described above.

Note: your solution has to sort the array in place.

Example:

[3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]


P: an array of integers
R: return the array in asc order of on bits
if two numbers have the same on bits, compare their real values instead
Note: your solution has to sort the array in place - e.g do not create a copy

loop through the array 
calculate the bits

helper function to calculate bits

function countBits(num){
    let bitCount = 0;
    num = num.toString(2);
    for (let i = 0; i < num.length; i++){
         if (num[i] == 1){
         bitCount++
         }
    }
    return bitCount

}


then sort:

arr.sort((a, b) => {
  const bitA = 
  const bitB = 

  if (bitA !== bitB) {
    return bitA - bitB;
  }

  return a - b;
  
then return the array

*/

function countBits(num){
    let bitCount = 0;
    num = num.toString(2);
    for (let i = 0; i < num.length; i++){
         if (num[i] === '1'){
         bitCount++
         }
    }
    return bitCount
}

function sortByBit(arr) {
  
  arr.sort((a, b) => {
    let bitA = countBits(a);
    let bitB = countBits(b);
    
    if (bitA !== bitB){
      return bitA - bitB;
    }
    
    return a - b
  });
  
  return arr;
 
  
}