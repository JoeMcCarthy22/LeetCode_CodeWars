/* Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true */

/*
P: 3 integers
R: True if triangle can be built
E: The sum of two sides must be greater than the third side, or positive
P: code for negative values (false)
code for two sides > third side = true
*/

function isTriangle(a,b,c){
    // return false if any inputs are negative
  if (a < 0 || b < 0 || c < 0){
    return false
   }
  
  if (a + b <= c){
    return false
  } else if (b + c <= a){
    return false
  } else if (a + c <= b){
    return false
  } else {
    return true
  }
  
  
}