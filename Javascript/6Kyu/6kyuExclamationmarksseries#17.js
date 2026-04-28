/*
Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"


P: two strings, consisting of either ? or !
R: Left or Right, or Balanced (Heaviest wins)

use a helper function that accepts a string
splits the string
loops through
counts exclamations
counts question marks
returns the appropriate total

then for the balance()
compare the results of calling the helper function
return the appropriate outcome

*/

function wordScore(string){
  let arr = string.split('');
  let exclamations = 0;
  let questions = 0;
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '!') exclamations++;
    if (arr[i] === '?') questions++;
  }
  
  return (exclamations * 2) + (questions * 3);
}



function balance(left, right) {
  let leftScore = wordScore(left);
  let rightScore = wordScore(right);
  
  if (leftScore > rightScore){
    return "Left"
  } else if (rightScore > leftScore){
    return "Right"
  } else {
    return "Balance"
  }
}