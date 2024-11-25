/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */

function capitalize(s){
    // create sub-strings to store the even/odd indexed variants
    let even = ''
    let odd = ''
    // loop through the string
    for (let i = 0; i < s.length; i++){
      if (i % 2 === 0){
        // add the even indexes
        even += s[i].toUpperCase()
        odd += s[i].toLowerCase()
      } else {
        // add the odd indexes
        even += s[i].toLowerCase()
        odd += s[i].toUpperCase() 
      } 
    } // return as an array
    return [even, odd]
  };
  
  
  
  /*    
  P: lowercase string with no spaces
  R: Capitalise letters that occupy even indexes, and then do the same but for Odd
  E: capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
  Ps: 
  create substrings 
  loop through the string
  if string[i % 2 === 0]
  add to even upper case, odd lower case,
  flip this the other way round to create both substrings
  return both substrings as an array
  
  */