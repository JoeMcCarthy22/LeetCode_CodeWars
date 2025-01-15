/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

/* P: a string
R: a string, replacing every letter with its position in the alphabet
E: As above
Ps:
- create an output array
- split input string into an array, lower case, and filter out numbers
- define the alphabet pair values as an object
-
- iterate through the input array using a for loop
- then convert the letters to their respective value

- join the output array back with a space + return

*/

function alphabetPosition(text) {
  
    let inputArray = text.toLowerCase().split('').filter(item => /[a-z]+$/.test(item));
    let output = [];
    
    const letterScores = {
      a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
      k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19,
      t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };
    
    for (let i = 0; i < inputArray.length; i++){
      output.push(letterScores[inputArray[i]])
    }
    
    
    return output.join(' ')
  
    
  }