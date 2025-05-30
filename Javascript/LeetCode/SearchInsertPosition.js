/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

 parameters - the target, and a sorted array of distinct integers
 return - the index of the target if found, or where it would be in order
 example
Input: nums = [1,3,5,6], target = 5
Output: 2

pseudocode:
-binary search for o(log n)
-initialise pointers for beginning and end 
-use while loop, while left <= right,
-establish the middle, if == target then return middle
-if nums[mid] < target; left = mid + 1
-else right = mid -1
-return left
 */
var searchInsert = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right){
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] == target){
            return mid;
        } else if (nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left
    
};