/* Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.*/

/*
P: an array of number
R: the sum of the two largest pairs
E: as above
Ps:
-sort the array in descending order
-store indices 0 and 1 in another array and reduce and then return
*/

function largestPairSum (numbers) {
  
    numbers.sort((a, b) => b - a);
    let largestPair = [numbers[0], numbers[1]];
    
    return largestPair.reduce((acc, c) => acc + c, 0);
    
  }