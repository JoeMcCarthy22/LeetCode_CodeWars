/*
parameter is an integer
return a string of said integer, but with commas after very 3 digits
e.g 10000 -> 10,000
-turn n into a string n.toString()
-edge case - if length < 4, return n.toString

-spli numStr into an array
-set a pointer at the end of array
-loop backwards through array
-the pointer will start at array.length-4
-use splice to insert a comma
-pointer then needs to -4
-at the end of the loop, if index[0] is a comma, remove it from the array
-join and return

-idea 2: make a new array and unshift to it 
*/

function groupByCommas(n) {
  
  let numStr = n.toString();
  if (numStr.length < 4) return numStr;
  
  let arr = numStr.split('');
  let pointer = arr.length - 3;
  let resultArr = [];
  
  for (let i = arr.length - 1; i >= 0; i--){
    if (i !== pointer){
      resultArr.unshift(arr[i]);
      } else if (i == pointer && i == 0){
        resultArr.unshift(arr[i])
      } else {
      resultArr.unshift(arr[i])
      resultArr.unshift(',');
      pointer -= 3;
    }
     
  }
  
  return resultArr.join('');
}