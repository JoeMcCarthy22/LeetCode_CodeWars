/*
params are the start and finish numbers of the shelves cat will visit
return the number of jumps from start to finish
​
cat can only jump one or three shelves at a time
Example: Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5) diff = 4
Example 2: Start 1, finish 3, answer is 1 (1 => 3) diff = 2
​
Ps:
-something using the difference between start and finish?
-use the 3 jump as much as possible, then modulus to calc remainder
​
​
*/
​
​
​
​
function solution(start, finish){
  let difference = finish - start;
  let threeJumps = Math.floor(difference / 3);
  let remainder = difference % 3;
  return threeJumps + remainder;
  
}