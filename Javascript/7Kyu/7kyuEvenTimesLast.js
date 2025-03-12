/* Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

/*
P: a sequence of integers
R: the sum of all even indexed integers, multiplied by the integer at the last index
E: 1 , 2 , 3 => (1 + 3) * 3 = 12
Ps:
store the last index value
filter the input array for only even index values, then reduce, then multiply by last index and return
*/

function evenLast(numbers) {
  
    let finalInteger = numbers[numbers.length-1];
    
    let evenIndexes = numbers.filter((num, i) => i % 2 === 0);
    
    return evenIndexes.reduce((acc, c) => acc + c, 0) * finalInteger
    
  }