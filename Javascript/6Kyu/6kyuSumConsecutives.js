/*
You are given a list/array which contains only integers (positive and negative). 
Your job is to sum only the numbers that are the same and consecutive. 
The result should be one list.


Example: [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]
"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]

params are a list which contains pos and neg numbers
return a list summing each consectuive number

STACK
create a result array
let stack

use a while loop,
while stack === s[i]
stack.push(s[i])
i++

- other condition
result.push(stack.reduce(acc,c) => acc + c, 0)
stack = s[i]
i++


*/


function sumConsecutives(s) {
  
  let result = [];
  let stack = [s[0]];
  
  for (let i = 1 ; i < s.length; i++){
    if (stack[stack.length-1] === s[i]){
      stack.push(s[i]);
    } else {
      result.push(stack.reduce((acc, c) => acc + c, 0));
      stack = [s[i]];
      }

    }
  
   result.push(stack.reduce((acc, c) => acc + c, 0));
  
  return result
  
  }