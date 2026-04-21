/*
The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

Examples:
a = "I like turtles"
b = "I like turkeys"
Result: 3

a = "Hello World"
b = "Hello World"
Result: 0

a = "espresso"
b = "Expresso"
Result: 2

input is 2 strings
output needs to be an integer - representing the number of differences between the chars of the strings
let count = 0;
-nested loop - in order to loop through both?
-or just one loop?
if (a[i] !== b[i]) count++
return count


*/


function hamming(a, b) {
  
  let count = 0;
  for (let i = 0; i < a.length; i++){
    if (a[i] !== b[i]) count ++;
  }
  
  return count;
}