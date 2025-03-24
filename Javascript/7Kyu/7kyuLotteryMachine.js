/* Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

Examples
"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5" */

/*
P: a string of random letters and integers
R: return all the unique integers : one more run if none
E: as above
Ps:
Filter function
- filter for integers first Number()
- if empty result, return one more run

part 2
loop through the string, if not present in result then add


*/

function lottery(str){
  
    //filter for numbers only
    let arr = str.split('');
    let numbers = arr.filter(char => !isNaN(char) && char.trim() !== '').map(Number);
    
    if (numbers.length == 0) return "One more run!";
    
    // loop through the string, and if not present, add to result string
    let result = [];
    
    for (let i = 0; i < numbers.length; i++){
      if (!result.includes(numbers[i])){
        result.push(numbers[i]);
      }
    }
    
    return result.join('');
   
  
  }