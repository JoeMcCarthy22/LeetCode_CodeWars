/*
Instructions
Output
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
the input is the same string
need to return said string either encoded or decoded
-hashmap or charCodeAt() ? or even just loop through the string?
-loop it is
-create an array
-push string[i] or its equivalent to the array
-join and return thy array
*/


function encode(string) {
  
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = [];
  for (let i = 0; i < string.length; i++){
    let char = string[i];
    
    if (!vowels.includes(char)){
      arr.push(char)
    } else if (char == 'a'){
      arr.push(1)
    } else if (char == 'e'){
      arr.push(2)
    } else if (char == 'i'){
      arr.push(3)
    } else if (char == 'o'){
      arr.push(4)
    } else if (char == 'u'){
      arr.push(5)
    };   
  };
  
  return arr.join('')
}

function decode(string) {
  
  let code = {
      '1': 'a',
      '2': 'e',
      '3': 'i',
      '4': 'o',
      '5': 'u'
    };
  
  let arr = [];
  for (let i = 0; i < string.length; i++){
    let char = string[i];
    
    if (char in code){
      arr.push(code[char])
    } else {
      arr.push(char)
    };
  };
  
  return arr.join('')
}