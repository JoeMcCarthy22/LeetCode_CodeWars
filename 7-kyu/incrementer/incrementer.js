/*
parameter is an array of digits
need to return the array, with each digit incremented by its position in the array,
start from 1 not 0,
​
e.g [1, 2, 3] => [ 2, 4, 6 ]
​
+1 , +2, +3
​
i + 1
​
*/
​
function incrementer(nums) { 
  
  
  if (nums.length == 0) return [];
  
  for (let i = 0; i < nums.length; i++){
    let inc = (i + 1);
    nums[i] = (nums[i] + inc) % 10;
  }
  
  return nums;  
  
}