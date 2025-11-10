/*
P:  string made up of letter a, b and o c
R: a string, change a to b, leave c untouched
Ps: split into an array
.map
join + return

*/


function switcheroo(x){
  
  let arr = x.split('');
  
     let switched = arr.map((char) => {
    if (char === 'a') {
      return 'b';
    } else if (char === 'b') {
      return 'a';
    } else {
      return char; 
    }
  });
  
  return switched.join('') 
  
  


}