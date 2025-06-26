/* Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!" */

/*
P: a string
R: "Hello String!"
E: as above
Ps:
2 steps
1) convert the name to sentence case
- lowercase and then index0 to upper case use a loop
2) insert the name within the sentence with the greeting and !
-use template literal
*/

var greet = function(name) {
  
  let sentenceCase = [];
  
  for (let i = 0; i < name.length; i++){
    let char = name[i]
    if (i == 0){
      sentenceCase.push(char.toUpperCase());
    } else {
      sentenceCase.push(char.toLowerCase());
    }
  }
  
  sentenceCase = sentenceCase.join('');
  
  return `Hello ${sentenceCase}!`
 
  
  

};