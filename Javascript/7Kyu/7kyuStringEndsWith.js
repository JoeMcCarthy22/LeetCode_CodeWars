/*

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

P: two strings
R: true if the first string ends with the second string
E: as above
Ps: 
let length = ending.length
slice the str by the length
if the slice == ending, return true 
*/

function solution(str, ending){
  
    let length = ending.length;
    let slice = str.slice(-length);
    
    return ending === "" || slice == ending;
  }