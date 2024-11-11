/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). */

function dnaStrand(dna){
    // split into an array
    dna = dna.split('')
    // use .map() to reassign each character
    let dnaMap = dna.map((character) => {
      if (character === 'A') return 'T';
      else if (character === 'T') return 'A';
      else if (character === 'G') return 'C';
      else if (character === 'C') return 'G';
    })
    // return as a string 
    return String(dnaMap.join(''))
  }
  
  
  /* Parameters: DNA string
  Return: Complementary DNA string
  Example: "ATTGC" --> "TAACG"
  Pseudocode: 
  split string into array
  use .map() to assign each character the complementary letter
    
    return String(dna.join(''))
    
  
  */
  
  
  