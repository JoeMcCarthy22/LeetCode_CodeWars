/*
P: a non-negative integer
R: a list of all the digits in order

-to String, then split,  then return 

*/

function digitize(n) {
  
   return n.toString().split('').map(x => Number(x))

}