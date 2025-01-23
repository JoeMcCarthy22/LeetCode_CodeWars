/* 

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

P: string with alphabet + numeric digits
R: the number of repeated digits - individual characters
E: As above
Ps:
- declare a count
- convert all to lower case and then split into an array
- iterate through the array

*/

function duplicateCount(text){
    let count = [];
    let seenCharacters = [];
    let arr = text.toLowerCase().split('');
    
    
    for (let i = 0; i < arr.length; i++){
      let char = arr[i]
      if (seenCharacters.includes(char)){
        if (!count.includes(char)){
          count.push(char)
        } 
      } else {
        seenCharacters.push(char)
      }   
    }
    
     return count.length 
  }