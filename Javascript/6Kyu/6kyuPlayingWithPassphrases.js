/*
choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

Parameters are s (the string in capital letters + digs and SC) and n (given number)
need to return the passphrase as a string following the algorithim
ex as above
plan:
-split s into an array
-use .map()
-shift each letter by given number -> char code + n
-if index is odd, lower case
-if index is even, upper case
-reverse and join
*/

function playPass(s, n) {
  
  return s.split('')
          .map((ch, i) => {
    
            if (ch >= 'A' && ch <= 'Z'){
              const shifted = String.fromCharCode(((ch.charCodeAt(0) - 65 + n) % 26) + 65);
              return i % 2 === 0 ? shifted.toUpperCase() : shifted.toLowerCase()
            }
    
            if (ch >= '0' && ch <= '9'){
              return String(9 - Number(ch))
            }
    
            return ch
            })
  
          .reverse()
          .join('')
          
                 
  }  
  
  
  
  
  
  

