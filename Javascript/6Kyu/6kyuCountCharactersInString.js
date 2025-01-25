/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

/*
P: string
R: object, counting the characters in the string. Empty == {}
E:  aba,  {'a': 2, 'b': 1}.
Pseudocode:

declare an alphabetScore object
alphabetScore = {letter : count}

loop through the string,
for let char of string,
if char == alphabet
count++

return alphabetScore

*/

function count(string) {
    let alphabetScore = {}; // Initialize empty object
  
    // Loop through each character in the string
    for (let char of string) {
      if (alphabetScore[char]) {
        // Increment count if character exists
        alphabetScore[char]++;
      } else {
        // Initialize count to 1 if character doesn't exist
        alphabetScore[char] = 1;
      }
    }
  
    return alphabetScore; // Return the object
  }
  