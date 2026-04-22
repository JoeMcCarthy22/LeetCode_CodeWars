/*
In this kata you are given a string for example:
"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.
The example above would return:
"exampleexample"
The parentheses can be nested.


P: a string
R: a string with all the chars within parenthesis and the parentehtis themselves removed
Example as above
Ps:
-loop through the string
-let result = ""
-keep track of 'depth' starting at 0
-while depth === 0 append char to result


*/

function removeParentheses(s){
  
  let result = "";
  let depth = 0;
  
  for (let i = 0; i < s.length; i++){
    if (s[i] === '(' ){
      depth++;
    } else if (s[i] === ')' ){
      depth--;
    } else if (depth === 0){
      result = result + s[i];
    }
  }
  
  return result;
  
  
}