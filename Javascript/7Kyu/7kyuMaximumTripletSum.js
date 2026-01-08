/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .


P: an array of numbers
R: the sum of maximum triplet, excluding repeated numbers
Ps:
-remove duplicates first
-let total = 0
-loop through the array in triplets
-if sum of triplet > total, update
-return total

*/
function maxTriSum(numbers) {
  // Step 1: remove duplicates, preserving order
  let noDupes = [];
  for (let num of numbers) {
    if (!noDupes.includes(num)) {
      noDupes.push(num);
    }
  }

  // Step 2: sort the array descending to find the largest numbers
  // But we need to keep track of order, so we don't sort the array
  // Instead, just find the top three numbers manually
  let first = -Infinity, second = -Infinity, third = -Infinity;

  for (let num of noDupes) {
    if (num > first) {
      // shift numbers down
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }

  return first + second + third;
}
