/* Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values: */

/*
the parameter is n, we need to return the nth traingular number,
return 0 for out of range values i.e <1
example above
-edge case check for n < 1
-the pattern of numbers is:  n:() 1:1 , 2:3, 3:6, 4:10, 5:15
-= n * (n + 1) / 2


*/

function triangular( n ) {
  
  if (n < 1) return 0;
  
  return (n * (n + 1) / 2);
}
