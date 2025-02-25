/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once.

/*
P: a number
R: the sum of all the multiples of 3 or 5 below the number passed in. return 0 if negative. If number is a multiple of both 3 and 5, only count it once
E: As above
Ps: 
-handle edge case
-make an array to store all the multiples in
-loop from 0 to (number)
- if number % 3 or 5 === 0
- reduce the array and return the sum
*/

function solution(number){
  
    // handle edge case
    if (number < 0) return 0;
    
    let multiples = [];
    
    for (let i = 0; i < number; i++){
      if (i % 3 === 0 || i % 5 === 0){
        multiples.push(i);
      }
    }
    
    return multiples.reduce((acc, c) => acc + c, 0)
    
  }