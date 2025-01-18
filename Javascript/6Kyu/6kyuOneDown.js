/*A very passive-aggressive co-worker of yours was just fired. While he was gathering his things, he quickly inserted a bug into your system which renamed everything to what looks like jibberish. He left two notes on his desk, one reads: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" while the other reads: "Uif usjdl up uijt lbub jt tjnqmf kvtu sfqmbdf fwfsz mfuufs xjui uif mfuufs uibu dpnft cfgpsf ju".

Rather than spending hours trying to find the bug itself, you decide to try and decode it.

If the input is not a string, your function must return "Input is not a string". Your function must be able to handle capital and lower case letters. You will not need to worry about punctuation.

*/

/*
P: a string - if not return input is not a string
R: if a string, decode the message and return it 
E: as above
Ps: - verify if string, if not return error message
- the bug is that every letter in string has been replaced by the next letter in alphavbet

- split into an array
- map , and perform a function to change each letter to the preceeding
- join and return
*/

function oneDown(str) {
  
    // check if a string
    if (typeof str !== "string"){
      return "Input is not a string"
      }
    
    // split into an array
    let arr = str.split('')
    
    // Map through the characters and shift each letter back one
    let decodedArr = arr.map(char => {
      if (char >= 'A' && char <= 'Z') {
        // Handle uppercase letters
        return String.fromCharCode(char.charCodeAt(0) - 1 < 65 ? 90 : char.charCodeAt(0) - 1);
      } else if (char >= 'a' && char <= 'z') {
        // Handle lowercase letters
        return String.fromCharCode(char.charCodeAt(0) - 1 < 97 ? 122 : char.charCodeAt(0) - 1);
      } else {
        // If it's not a letter, return it as is
        return char;
      }
    });
  
    // Join the array back into a string and return
    return decodedArr.join('');
  }
  
  