/*
parameter is an array of integers
we need to return the sum of each part, removing 0 index element each time
example as above

-create an array to store the sums of parts

-use a while loop - ls.length > 0
-reduce.(ls) to get the sum of the parts 
-then array.push(reduce......)
-then remove the first element of the array - .shift()

-return array
*/

function partsSums(ls) {
    
  let resultArray = [];
  
  while (ls.length > 0){
    resultArray.push(ls.reduce((acc, c) => acc + c, 0));
    ls.shift();
  }
  
  resultArray.push(0);
  return resultArray
}