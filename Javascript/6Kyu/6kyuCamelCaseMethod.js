/*

Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
Don't forget to rate this kata! Thanks 


parameter is a string
need to return string in camelCase
example above
-standardise to all lowerCase
-split the words into an array
-edge case for 1 word
-starting from index 1, convert first letter to upper case
-join and return
*/

String.prototype.camelCase=function(){
  
  let string = this;
  string = string.toLowerCase();
  
  let words = string.split(' ');
  
  if (string.length == 0) return ""
  
  for (let i = 0; i < words.length; i++){
    let firstLetter = words[i][0].toUpperCase(); 
    let rest = words[i].slice(1)
    words[i] = firstLetter + rest
  }
  
   return words.join('').toString();
  
  
  
  
}