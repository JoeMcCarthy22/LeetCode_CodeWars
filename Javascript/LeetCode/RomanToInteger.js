/* 13. Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:
*/

/**
 * @param {string} s
 * @return {number}

 parameter is a Roman Numeral String
 return the RN as an integer
 Example as above
 Pseudcode:

 create an object to use as a map and store each RN and its int value within;
 establish a return value = 0
 
 loop through the RN string,
 establish current = romanMap[s][i], next = current = romanMap[s][i+1]

 if the current is less than the next, then add next then subtract, and i++ to skip the next char,
 else add next
 return total
 */
 var romanToInt = function(s) {  

    let romanMap = {
         I: 1,
         V: 5,
         X: 10,
         L: 50,
         C: 100,
         D: 500,
         M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++){
       let current = romanMap[s[i]];
       let next = romanMap[s[i+1]];

       if (current < next){
        total += next - current;
        i++;
       } else {
        total += current
       }
    }

    return total
    
};