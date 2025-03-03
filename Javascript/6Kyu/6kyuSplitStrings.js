/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_'] */

/*
P: a string
R: pairs of two characters
E: As above
Ps:
- if string contains an odd number of chracters, add an underscore
- split string into an array
- create a result array
- use a for loop on input string
- push to result loop, increment i +2 and join as a string
- return as an aray
*/

function solution(str){
  
    let result = [];
    
    // add underscore if not even length
    if (str.length % 2 !== 0){
      str = str + '_'
    }
    
    //split string into an array
    let arr = str.split('');
    
    for (let i = 0; i < arr.length; i+=2){
      result.push(arr.slice(i, i + 2).join(''))
    }
    
    return result
    
     
  }