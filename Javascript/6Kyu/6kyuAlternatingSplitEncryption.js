/* Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

*/

/*
P: string, integer
R: a string - concatenate all the odd indexed characters + the evens - then repeat n times
E: As above
Ps: 
-while loop and then  for loop through string
- work with arrays
- if conditionals - add to evens or odds and then add to reusllt array then concatenate by joining 
-return the string
*/

function encrypt(text, n) {
  
    // handle edge cases
    if (!text || n <= 0) return text;
    
    let arr = text.split('');
    
    while (n > 0){
      
      let evenIndexes = [];
      let oddIndexes = [];
    
    for (let i = 0; i < arr.length; i++){
      if (i % 2 == 0){
        evenIndexes.push(arr[i]);
      } else {
        oddIndexes.push(arr[i]);
      }
    }
      
    arr = oddIndexes.concat(evenIndexes);
    n--;
      
      };
    
    return arr.join('')
  
  }
  
  /*
  P: encryptedText and n - number of times to repeat
  R: a string
  E: As above
  Ps: 
  - try to reverse the process from prior function
  - find the mid point of the encryptedText
  
  
  
  */
  
  function decrypt(encryptedText, n) {
    
    if (!encryptedText || n <= 0) return encryptedText;
  
    
      let length = encryptedText.length;
  
    while (n > 0) {
      let mid = Math.floor(length / 2); // Split point
      let oddPart = encryptedText.slice(0, mid); // First half (odd-indexed)
      let evenPart = encryptedText.slice(mid); // Second half (even-indexed)
      
      let original = [];
      let oddIndex = 0, evenIndex = 0;
  
      for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
          original.push(evenPart[evenIndex++]); // Take from even part
        } else {
          original.push(oddPart[oddIndex++]); // Take from odd part
        }
      }
  
      encryptedText = original.join(''); // Update the string
      n--; // Repeat for N times
    }
  
    return encryptedText;
  }
  