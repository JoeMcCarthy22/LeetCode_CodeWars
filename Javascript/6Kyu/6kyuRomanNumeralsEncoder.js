/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
input is a roman numeral
need to return its value as a integer
example - XXI == 21
-need to create aobject to store conversion values
-loop through the input string,
-if char > char [i+1] then add it to integer
-if char < char [i+1] then subtract it
*/

function solution (roman) {
  
  let romanNums = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
  }
  
  let result = 0;
  
  for (let i = 0; i < roman.length; i++){
    let char = roman[i];
    let next = roman[i+1];
    
    if (romanNums[char] < romanNums[next]){
      result -= romanNums[char];
    } else {
      result += romanNums[char];
    }; 
  };
  
  return result
}