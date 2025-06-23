/*67. Add Binary
Given two binary strings a and b, return their sum as a binary string.
Example 1:
Input: a = "11", b = "1"
Output: "100"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}

 given two binary strings e.g a = '11' , b = '1' output = 100
 return their sum as a binary string i.e a + b = binary result
 to convert string to binary, number first? or just parseInt(2)
 Update - will need to use bigInt
 return in binary i.e toString(2)
 */
var addBinary = function(a, b) {

    let numberA = BigInt("0b" + a);
    let numberB = BigInt("0b" + b);

    let result = numberA + numberB;

    return result.toString(2);
    
};