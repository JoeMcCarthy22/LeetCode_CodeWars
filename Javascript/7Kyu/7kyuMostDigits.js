/*
P: an array of digits
R: the number with the most digits
E:
P:
-create a result array
-loop through input array
-if input[i].length >= result[0].length  then push [i] to the result
return result[0]


*/

function findLongest(array){
  let result = [array[0]];
  
  for (let i = 0; i < array.length; i++){
    if (array[i].toString().length > result[0].toString().length){
      result = [array[i]];
      }
    }
  
  return result[0]
  
  }
    