/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
Return as a number.

P: an array of numbers and stringnums
R: total of numbers - stringnums
PS: - create two seperate arrays
loop through the input array and push to appropriate array
use .reduce to calculate the total of each array
for the numstrngs, use Number() to convert to number
perform the final subtraction and return

*/



function divCon(x){
  
  let numbers = [];
  let numStr = [];
  
  for (let i = 0; i < x.length; i++){
    if (Number.isFinite(x[i])){
      numbers.push(x[i])
    } else {
       numStr.push(Number(x[i]))
    }
  }
  
  return numbers.reduce((acc, c) => acc + c, 0) - numStr.reduce((acc, c) => acc + c, 0)

}