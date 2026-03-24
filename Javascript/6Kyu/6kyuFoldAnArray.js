/*
params are an array of ints and the number of folds (runs)
need to return the array once folded runs times

if odd length of arr, middle number stays unchanged,
so need to find the mid point, and add all numbers together equidistant from mid point

if even length of arr, all nums are modified,
can still use a midpoint

need to use a loop, and use a counter, until counter = runs

return the array at the end



*/



function foldArray(array, runs){
  
  let copyArr = [...array];
  let count = 0;
  
  
  while (count < runs){
    
    let temp = [];
    
    
    // return the arr if length is 1
    if (copyArr.length == 1) return copyArr;
    
    // folding when length is odd
    else if (copyArr.length % 2 !== 0){
      let midpoint = Math.floor(copyArr.length / 2);
      
      for (let i = 0; i < midpoint; i++){
        temp.push(copyArr[i] + copyArr[copyArr.length-1-i])
      }
      
      temp.push(copyArr[midpoint])
      

      
      copyArr = temp;
      count++;
      
    
    // folding when length is even  
    } else if (copyArr.length % 2 == 0) {
      let midpoint = Math.floor(copyArr.length / 2);
      
      for (let i = 0; i < midpoint; i++){
        temp.push(copyArr[i] + copyArr[copyArr.length-1-i])
      }
      
      copyArr = temp;
      count++;
       
      
    }
    
  }
  
  return copyArr
  
  
  
  
  
}