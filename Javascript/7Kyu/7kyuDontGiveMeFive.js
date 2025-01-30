/* Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12 */

/* P start and end numbers
R: count of all the numbers between the region without a 5
E: as above
Ps:
Establish a count 
use a for loop to iterate through the range
if range[i].includes(5) then count++
*/


function dontGiveMeFive(start, end){
  
    let count = 0;
    
    for (let i = start; i <= end; i++){
      if (!i.toString().includes('5')){
        count++
      }
    }
    return count
  }