/*
Example (address, n --> output)
Given your house number address 
and length of street n, give the house number on the opposite side of the street.

hs  n  opp
1, 3-> 6          output = 7
2, 3 --> 5
3, 3 --> 4
4, 3 --> 3
5, 3 --> 2
6, 3 --> 1

length of road is 2*n
all pairs of houses add to the same number (7)
output = address + opposite
Therefore - output is  2n +1    address


*/

function overTheRoad(address, n){
  
  return (2 * n) + 1 - address
  
  
}