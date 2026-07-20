​
function incrementer(nums) { 
  
  
  if (nums.length == 0) return [];
  
  for (let i = 0; i < nums.length; i++){
    let inc = (i + 1);
    nums[i] = (nums[i] + inc) % 10;
  }
  
  return nums;  
  
}