/*Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
divisor = 2, bound = 7 ==> return (6)*/

/*
P: integers - divisor and a bound
R: the largest integer (N) which is divisible by divisor and is <= bound
E: as above
Ps:
use a for loop, starting at bound and decreasing,
once n % divisor == 0, return n
*/

function maxMultiple(divisor, bound){
  
    for (let i = bound; i > 0; i--){
      if (i % divisor == 0) return i
    }
  }