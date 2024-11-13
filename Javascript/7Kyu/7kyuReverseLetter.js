/* Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string */

function reverseLetter(str) {
    // omit all non-alphabetic characters
   str = str.replace(/[^a-zA-Z]/g, "");
   // split into array and reverse, join the array back into a string
   str = str.split('').reverse().join('')
   return str 
 }
 
 /*
 P: string
 R: reverse string, alphabetic characters only
 E: For str = "ultr53o?n", the output should be "nortlu".
 P: 
 check if alphabetic str.replace([^a-zA-Z]/g, '')
 
 Split
 reverse
 join
 
 
 
 */