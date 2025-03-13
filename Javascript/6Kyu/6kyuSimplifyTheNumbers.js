/* Given a positive integer as input, return the output as a string in the following format:

Each digit (from left to right) multiplied by the corresponding power of 10, so that the sum equals the input number.

If the digit is zero, exclude it from the output;
For the last digit, just use the digit itself, without *1.
Examples
0     -->  ""
56    -->  "5*10+6"
60    -->  "6*10"
999   -->  "9*100+9*10+9"
10004 -->  "1*10000+4"
Note: input >= 0 */

/*
P: a positive integer
R: a string in the requested format
E: as above
Ps:
handle the edge case for number = 0; 


create a string to store the result in 
convert input string to number, if length == 1 return numStr

loop through the numStr;


*/

function simplify(number){

    if (number === 0) return "";
    
    let numStr = number.toString(); 
    if (numStr.length === 1) return numStr;
    
    let result = [];
    
    for (let i = 0; i < numStr.length; i++){
      let digit = numStr[i];
      let powerOfTen = numStr.length - 1 - i;
      
        if (digit !== '0') {
        if (powerOfTen === 0) {
          result.push(digit);  // Just append the last digit without multiplication
        } else {
          result.push(`${digit}*${'1'.padEnd(powerOfTen + 1, '0')}`);  // Format for non-zero digits
        }
      }
    }
    
    return result.join('+')
  }