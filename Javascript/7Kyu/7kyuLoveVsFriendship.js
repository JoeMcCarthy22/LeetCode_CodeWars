/*
the parameter is a string
we need to return the sum of the alphabet positions of each letter
-split the string into letters
-create a total score var
-loop through the letters array
-calculate charCodeAt() - 96 and add to the total score
return score
*/

function wordsToMarks(string){
  
  let letters = string.split('');
  let score = 0;
  
  for (let char of letters){
    score += char.charCodeAt(0) - 96;
  }
  
  return score
}