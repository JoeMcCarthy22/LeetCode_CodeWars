/* Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"*/

/*
P: a string
R: the same string with even index upper case and odd index lower case
E: as above
Ps: 
- split the string into an array of words
- loop through each word
- use a nested loop
- if word[i%2==0] then .toUpperCase()
- opposite
- join and return
*/

function toWeirdCase(string){
  
    let arr = string.split(' ');
    
    for (let i = 0; i < arr.length; i++){
      let word = arr[i];
      let newWord = "";
      
      for (let j = 0; j < word.length; j++){
        let letter = word[j];
        if (j % 2 == 0){
          letter = letter.toUpperCase();
        } else {
          letter = letter.toLowerCase();
        }
        
        newWord += letter
      } 
      arr[i] = newWord
    }
    
    return arr.join(' ')
  }