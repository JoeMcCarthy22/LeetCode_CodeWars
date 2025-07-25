/*In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

Here is the algorithm:

Double every other digit, scanning from right to left, starting from the second digit (from the right).

Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:

1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

891 ==> [8, 9*, 1] ==> [8, 18, 1]
If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):

[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

or:

[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
Sum all of the final digits:

[8, 9, 1] ==> 8 + 9 + 1 = 18
Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
given a positive integer of up to 16 digits
return true if its a valid CC number

-split n into an array
-Double every other digit, scanning from right to left, starting from the second digit (from the right).
-use a loop and work backwards? reverse the input? - YES so we need to start doubling from index 1

-If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):
-sum all the final digits
-finally, take the sum and divide (%) by 10. if remainder is 0, return true
*/

function validate(n){
  
  let reverse = n.toString().split('').reverse();
  let doubles = [];
  
  for (let i = 0; i < reverse.length; i++){
    let number = reverse[i];
    
    if (i % 2 == 0){
      doubles.push(Number(number))
    } else {
      let doubledNumber = number * 2;
      if (doubledNumber <= 9){
         doubles.push(doubledNumber)
      } else {
        doubles.push(doubledNumber - 9)
      } 
    }
  } 
  
  let sum = doubles.reduce((acc, c) => acc + c, 0);
  
  return sum % 10 === 0;
  
  

  
    
  
  
}