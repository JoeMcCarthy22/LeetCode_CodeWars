/*
Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

Good luck!

P: a jumble , then an array of words
R: the words that are anagrams of the jumble in an array, or [] if none
Ps:
calculate the char code values of each word
if a match, then add to an output array
return the output array

calc the value - split into individual letters
let wordscore
loop through each letter
wordscore += letter score

use a helper function to calculate wordscore

loop through the disctionary, if wordscores are equal, push to output
return output

*/


function normalize(word){
  return word.split('').sort().join('');
}

function grabscrab(anagram, dictionary) {
  const result = [];
  const target = normalize(anagram);

  for (let i = 0; i < dictionary.length; i++){
    if (normalize(dictionary[i]) === target){
      result.push(dictionary[i]);
    }
  }

  return result;
}

/* function wordScore(word){
  let score = 0;
  
  for (let i = 0; i < word.length; i++){
    score += word.charCodeAt(i);
  }
  
  return score;
}


function grabscrab(anagram, dictionary) {
  let output = [];
  let anagramScore = wordScore(anagram);
  
  for (let i = 0; i < dictionary.length; i++){
    let dictionaryWordScore = wordScore(dictionary[i]);
    if (anagramScore === dictionaryWordScore){
      output.push(dictionary[i]);
    }
  }
  
  return output
  
}

*/