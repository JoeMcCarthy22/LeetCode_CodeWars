/*

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
P: an array of ints
R: an array, but remove all dupes except the last one

Ex
-create a result array
-reverse the original array
-loop through, and if !.includes(), push to result array
reverse and return 
*/


function solve(arr) {
  
  let result = [];
  
  let reverseArr = arr.reverse();
  
  for (let i = 0; i < reverseArr.length; i++){
    let char = reverseArr[i]
    if (!result.includes(char)){
      result.push(char);
    }
  }
  
  return result.reverse();
  
}