/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

function smallEnough(a, limit){
    // Use a for loop and conditionals to determine true or false
    for (let i = 0; i < a.length; i++){
      if (a[i] > limit){
        return false;
        }
      } return true;
    }
  
  
  /* P: array and a limit value
  R: true (if all values are equal or below the limit value) or false if not
  E: [1, 2, 3, 4] lv: 20 return true
  Ps: 
  
  Use a for loop and conditionals to determine true or false
  
  
  */