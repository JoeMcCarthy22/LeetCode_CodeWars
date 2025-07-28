/*
Write a function which takes two integers num1 and num2 and returns 1 if there is a straight triple of a digit at any place in num1 and also a straight double of the same digit in num2.

If this isn't the case, return 0.

parameter is two integers
need to return 1 if there is a triple in num1 and triple*2 in num2
-num1 - we need to establish if there is a triple first
-num2 - simply look for double the triple

-num1
-split the num into an array
-create a triple array
-use a loop to check each digit is succeeded by 2 identicals - if so push 2 to the array
-join

-num2
-use .match()?
- if true, return 1

*/

function tripledouble(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  for (let i = 0; i < str1.length - 2; i++) {
    if (str1[i] === str1[i + 1] && str1[i] === str1[i + 2]) {
      let digit = str1[i];
      if (str2.includes(digit + digit)) {
        return 1;
      }
    }
  }

  return 0;
}
