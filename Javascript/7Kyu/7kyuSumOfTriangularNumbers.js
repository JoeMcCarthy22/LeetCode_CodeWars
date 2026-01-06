/*
Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

Triangular Numbers cannot be negative so return 0 if a negative number is given.

P: a number
R: 0 if a neg number, or return the sum of triangular numbers up to and including the nth traingular number
E: If 4 is given: 1 + 3 + 6 + 10 = 20.
Ps:
if n < 0 return 0
-identify the sequence - each triangular number
if n = 4 => 1 + (1+2) + (1+2+3) + (1+2+3+4)

use a loop
need to keep track of two accumolatros  one for the triangular number, and then one for the running total

each iteration - increase i by 1, and the triangular number increases by i
*/

function sumTriangularNumbers(n) {
  
  if (n < 0) return 0;
    
  let triangularNumber = 0;
  let total = 0;
    
    for (let i = 1; i <= n; i++){
      triangularNumber += i;
      total += triangularNumber  
    }
  
  return total
    
    
}