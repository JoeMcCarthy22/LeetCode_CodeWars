/*
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. 
This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.


P: an array of integers as an argument 
R: return another function - which takes a single integer as an argument and returns a new array 
   this new array should contain each of the elemtents from first array * the integer
   
Ps: currying: copy the input array using input_array.slice()
            use .map to multiply each element by the integer
  


*/


function multiplyAll(input_array) {
  return function currying(int){
    return input_array.map(el => el * int)
  }
}