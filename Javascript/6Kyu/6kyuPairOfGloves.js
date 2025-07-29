/*
input is an array describing the glove of each colour
return the number of pairs available
-let pairs = 0
-use an object to hold the results
-let counts = {}
-loop through the counts and add where necessary
-if the count is even, then add it to pairs

*/

function numberOfPairs(gloves){
  
  let pairs = 0;
  let counts = {}
  
  for (const glove of gloves){
    counts[glove] = counts[glove] ? counts[glove] + 1 : 1;
  }
  
  for (const glove in counts){
    pairs += Math.floor(counts[glove] / 2);
  }
  
  return pairs
  
}