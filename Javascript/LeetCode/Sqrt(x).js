/*69. Sqrt(x)
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 */

/**
 * @param {number} x
 * @return {number}

 Parameter = non - negative integer x
 return - the square root of x, rounded down to nearest integer
 example - x = 4 -> 2
 Pseudocode: 
 let sqrrt = Math.sqrt(x)
 return Math.floor(x)
 */
var mySqrt = function(x) {

    let squareRoot = Math.sqrt(x);
    return Math.floor(squareRoot);
    
};