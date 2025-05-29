/*191. Number of 1 Bits
Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).*/

/**
 * @param {number} n
 * @return {number}

 paramter is a positive integer n
 return the number of set bits (1) in its binary representation
 exmple n = 11 -> 3 as 1011 has 3 bits
 
 convert n to binary 
 let binary = n.toString(2)
 then we need to count number of '1' in binary,
 loop through it and increment a counter 
 */
var hammingWeight = function(n) {

    let binary = n.toString(2);
    let setBits = 0;
    for (let i = 0; i < binary.length; i++){
        if (binary[i] === '1'){
            setBits++
        }
    }

    return setBits
    
};