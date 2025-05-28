/* 231. Power of Two
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.
Constraints:
-231 <= n <= 231 - 1
 */

/**
 * @param {number} n
 * @return {boolean}

 parameter is an integer, n, can be positive or negative
 return true if it is a power of 2,
 example n = 16 -> true, as 2^4 = 16
 A number is a power of two if it is greater than 0 and it has only one bit set in binary. 
 no negative numbers can be a power of 2
 all binary numbers have one bit 
 so use bitwise comparison, must return 0
 */
var isPowerOfTwo = function(n) {

    return (n > 0 && (n & (n - 1)) === 0)
    
};