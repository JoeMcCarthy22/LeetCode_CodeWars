/*Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
/*
P: integer
R: sum of all the inputs values
E: as above
Ps:
-change the input .toString()
-split the input into an array
-reduce the array - sum and absolute - return
*/

/*
P: integer
R: sum of all the inputs values
E: as above
Ps:
-change the input .toString()
-split the input into an array
-reduce the array - sum and absolute - return
*/

function sumDigits(number) {
    let abs = Math.abs(number)
    let str  = abs.toString();
    let digits = str.split('');
    
    return digits.reduce((acc, digit) => acc + Math.abs(Number(digit)), 0)
  }
  
