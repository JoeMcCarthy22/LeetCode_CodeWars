/*
P: a (block size) and n number
R: the perimeter the nth shape

pattern

assuming a = 1    
n = 1  - p = 4  
n = 2 - p = 8
n = 3 = p = 12

if n = 1, return a * 4

*/


function perimeterSequence(a,n) {
  
  return n * (a * 4)
  
  
}