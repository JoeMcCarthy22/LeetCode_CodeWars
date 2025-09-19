/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12

parameter is an array, never empty
need to return the most freq number in the array - if a tie, then the larger
ex as abov
-use a hashmap to determine how many times each object appears
-then program the logic to return the mode

-use a loop to generate the hashmap
Loop through the array, and for each number:
If it already exists in the map, increment its count.
If it doesn't, add it with a count of 1.

*/

function highestRank(arr){
  
  let freq = {};
  
  for (let i = 0; i < arr.length; i++){
    let num = arr[i]
    if (!freq.hasOwnProperty(num)){
      freq[num] = 1;
    } else {
      freq[num]++
    }
  }
  
  let entries = Object.entries(freq);
  
  entries.sort((a, b) => {
    if (b[1] === a[1]){
      return Number(b[0]) - Number(a[0]);
    }
    
    return b[1] - a[1]
  })
  
  return Number(entries[0][0]);

  
}