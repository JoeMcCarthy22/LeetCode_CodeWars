/*

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
Your task will be to return the sum of the numbers that occur only once.

parameter is an array of numbers
need to return the sum of the numbers that occur only once

check for dupes
sort asc - check if arr[i] == arr[i+1]

add to an array
reduce and return


*/

function repeats(arr){
  
   arr.sort((a, b) => a - b);
  
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] === arr[i - 1]) {
        arr.splice(i - 1, 2);
    }
  }
  
  
    return arr.reduce((acc, c) => acc + c, 0);
  }
    