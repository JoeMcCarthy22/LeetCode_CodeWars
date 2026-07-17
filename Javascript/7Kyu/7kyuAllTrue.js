/*
parameter s a string
need to return true if all chars are unique, false if not
case senstitive

ps

split and sort str
loop through and if str[i] = str[i+1] then return false

*/


function hasUniqueChars(str){
  let arr = str.split('').sort();
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == arr[i+1]){
      return false
    }
  }
  
  return true
}