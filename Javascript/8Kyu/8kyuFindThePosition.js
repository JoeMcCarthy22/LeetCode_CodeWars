/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested */

function position(letter){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return `Position of alphabet: ${alphabet.indexOf(letter, 0) + 1}`
  }