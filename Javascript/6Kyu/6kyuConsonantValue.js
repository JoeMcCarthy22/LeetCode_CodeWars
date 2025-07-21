/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiac", let's cross out the vowels. We get: "z o d ia c"

lowercase string
return the highest value of substring
example as above
-use regex to split the string split(/[aeiou]/i);
-loop through each word
-create a score
-useCharCodeat(0) - 96 to get the letter score and add to total
return the highest score
*/

function solve(s) {
  
  let subStrings = s.split(/[aeiou]/i);
  let highScore = 0;
  
  for (let i = 0; i < subStrings.length; i++){
    let word = subStrings[i]
    let wordScore = 0;
    
    for (let j = 0; j < word.length; j++){
      let letter = word[j];
      wordScore += letter.charCodeAt(0) - 96;  
    } 
    
    if (wordScore > highScore){
        highScore = wordScore
      } 
  }
  
  return highScore
  
};