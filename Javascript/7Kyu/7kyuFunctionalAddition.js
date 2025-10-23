/*
P: n - 
R: a function that adds n to any number Create a function add(n)/Add(n) which returns a function that always adds n to any number
E: 
*/


function add(n) {
  
 return function number2(x){
    return x + n
  }
}
