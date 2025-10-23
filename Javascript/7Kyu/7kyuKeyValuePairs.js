/*
P: a hhash map of languagees and corresponding score
R: an array of the languages where the corresponding score is at least 60
PS: create a result array
loop through the input results
if results[score] >= 60, push to result array
return the result array
*/

function myLanguages(results) {
  
 let languages = Object.keys(results);
  
  let passed = languages.filter( lang => results[lang] >= 60);
  
  return passed.sort((a, b) => results[b] - results[a]);
  

}