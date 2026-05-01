/*
Where is my parent!?(cry)
Task:
Place all people in alphabetical order where Mothers are followed by their 
children, i.e. "aAbaBb" => "AaaBbb".
-Function input: String contains only letters, uppercase letters are unique.

P: a string
R: a string with the Mothers followed by Children
E; as above
Ps: 
-create a result array
-split the input into an array
-loop through, and identify the capital letters by comparison to Upper Case
-if upper case, then push in a sub array to result result.push([A])
-filter out the uppercase letters from input
-loop through input and if the upper case equivalent exists, push to that subarray
-spread, join , return result

*/


function findChildren(dancingBrigade) {
  let result = [];
  
  let arr = dancingBrigade.split('').sort();
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i].toUpperCase()){
      result.push(arr[i])
    }
  }
  
  let lowers = arr.filter(char => char !== char.toUpperCase()).sort();
  
  for (let i = 0; i < lowers.length; i++){
    let mother = lowers[i].toUpperCase();
    
    if (result.includes(mother)){
      result.splice(result.indexOf(mother) + 1, 0, lowers[i]) 
    }
  }
  
  
  return result.join('')
  }