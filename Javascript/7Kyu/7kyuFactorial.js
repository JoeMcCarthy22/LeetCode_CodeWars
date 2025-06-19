/* Your task is to write function factorial https://en.wikipedia.org/wiki/Factorial*/

/*
Factorial: the product of all positive integers less than or equal to n
e.g 5! = 5 x 4! = 5 x 4 x 3 x 2 x 1 = 120
use recursion or loop
*/

function factorial(n){
  if (n === 1 || n === 0){
    return 1
  }
  
  return n * factorial(n - 1)
}