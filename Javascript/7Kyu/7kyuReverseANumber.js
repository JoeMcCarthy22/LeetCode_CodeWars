/*
parameter is a number
need to return as a number but in reverse

toString, split, reverse, join,

return Number()


*/


function reverseNumber(n) {
  
  let neg = false
  
  if (n < 0){
     neg = true;
  }
  
  let numStr = n.toString().split('').filter(char => char !== '-').reverse().join('');
  numStr = Number(numStr)
  
  return neg !== true ? numStr : (0 - numStr)
}