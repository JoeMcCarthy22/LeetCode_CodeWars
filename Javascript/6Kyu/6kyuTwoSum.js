/* Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

/*
P: an array of numbers, target number
R: the indices of the sum of two elements in an array
E: As above
PS:
- loop through the numbers and subtract from the target
- if the result is included within the numbers, return the indices of arr[i] + the result
*/


function twoSum(numbers, target) {
 
    // loop through numbers and subtract from the target
    
    for (let i = 0; i < numbers.length; i++){
      let firstValue = numbers[i]
      let result = (target - firstValue);
      
      if (numbers.includes(result) && firstValue !== result){
        return [numbers.indexOf(firstValue), numbers.indexOf(result)]
        
      } else if (numbers.includes(result) && firstValue == result){
        return [numbers.indexOf(firstValue), numbers.indexOf(result, 1)]
      }
      } 
    
    
  }