/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case*/

/*
P: an integer
R: the number of '1's in the binary representation of that number
E: as above
Ps: 
convert the number to binary by using .toString(2)
loop through the binary rep
if [i] == 1, count ++
return count
*/

var countBits = function(n) {
  
    let binaryRep = n.toString(2);
    let oneCount = 0;
    
    for (let i = 0; i < binaryRep.length; i++){
      if (binaryRep[i] === '1'){
        oneCount++
      }
    }
    
    return oneCount
    
  };