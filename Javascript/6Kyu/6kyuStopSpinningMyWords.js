/* Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" */

/*
P: string of one or more words
R: same string, but reverse the words with 5 or more letters
E: as above
Ps:
- split string into array of words
- for loop, iterate through the array
- if word.length > 4; then reverse it
- join together
- return
*/


function spinWords(string){
  
    let arr = string.split(' ');
    
    for (let i = 0; i < arr.length; i++){
      if (arr[i].length > 4){
        arr[i] = arr[i].split('').reverse().join('')
      }
    }
    
    return arr.join(' ')
  
  }