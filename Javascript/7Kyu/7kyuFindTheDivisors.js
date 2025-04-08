/* Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Examples:
divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"*/

/*
P: an integer
R: an array of all the divisors except 1 and the integer itself, or prime
E: as above
Ps: create a result array
for loop from 2 to integer -1
if integer % i == 0; then push to the result  array
if the result array length == 0 , return the string `${integer} is prime`
*/

function divisors(integer) {
  
    let result = [];
    
    for (let i = 2; i < integer; i++){
      if (integer % i == 0){
        result.push(i);
      }
    }
    
    return result.length === 0 ? `${integer} is prime` : result
    
  }