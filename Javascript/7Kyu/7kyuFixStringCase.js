/* In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck! */

function solve(s){
    // count the number of upper + lower case letters
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  for (let char of s){
      if (char === char.toUpperCase()){
          upperCaseCount += 1;
      } else if (char === char.toLowerCase()){
          lowerCaseCount += 1};
      } 
  // if statement to determine which case is returned
  if (upperCaseCount > lowerCaseCount){
    return s.toUpperCase()
  } else {
    return s.toLowerCase()
  }};
  


/*
P: String with mixed cases
R: convert to upper or lower case - as little changes as possible
E: solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
   solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
   solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
Ps:

Count the number of uppercase letters


Count the number of lower case letters

if statement to determine which case is returned

*/

