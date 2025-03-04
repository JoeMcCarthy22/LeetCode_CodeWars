/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number) */

/*
P: Array
R: the only odd or even outlier
E: as above
Ps: use a filter
*/

function findOutlier(integers){
  
    let evens = integers.filter(num => num % 2 == 0);
    let odds = integers.filter(num => num % 2 !== 0);
    
    return evens.length === 1 ? evens[0] : odds[0]
    
  }  
    
  