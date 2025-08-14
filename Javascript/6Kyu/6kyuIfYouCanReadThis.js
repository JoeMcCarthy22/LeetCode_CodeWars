/*
parameter is a string,
need to return a string but in Phonetic language
Every word and punctuation mark should be seperated by a space
Punctuation should be kept in your return string, but spaces should not.

-split the input into an array of words

-filter out any lower case letters
-filter the array for spaces
-use map to replace each capital letter with the phonetic equivalent from the object
-join and return
*/

function toNato(words) {
   
  const NATO = {
      A: "Alfa",
      B: "Bravo",
      C: "Charlie",
      D: "Delta",
      E: "Echo",
      F: "Foxtrot",
      G: "Golf",
      H: "Hotel",
      I: "India",
      J: "Juliett",
      K: "Kilo",
      L: "Lima",
      M: "Mike",
      N: "November",
      O: "Oscar",
      P: "Papa",
      Q: "Quebec",
      R: "Romeo",
      S: "Sierra",
      T: "Tango",
      U: "Uniform",
      V: "Victor",
      W: "Whiskey",
      X: "Xray",
      Y: "Yankee",
      Z: "Zulu",
     };
  
  let arr = words.toUpperCase().split('');
  
 for (let i = 0; i < arr.length; i++) {
     if (/^[a-zA-Z]$/.test(arr[i])) {
       arr[i] = NATO[arr[i]]
  }
}


  
  return arr.filter(char => char !== " ").join(' ')
}

