/* Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
Square all numbers k (0 <= k <= n) between 0 and n.
Count the numbers of digits d used in the writing of all the k**2.
Implement the function taking n and d as parameters and returning this count.
Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

/*
P: number, and THE DIGIT
R: The count that THE DIGIT turns up in the square of all numbers between 0 and n
E: As above
Ps:
calculate k, the square of all numbers between 0 and n (make this an array)
implement a count for THE DIGIT
use a for loop to count for THE DIGIT
return the count
*/

function nbDig(n, d) {
    // calculate k and push the squares between 0 and n to an array
  let k = [];
  for (let i = 0; i <= n; i++){
    k.push(i ** 2);
  }
  
  // split k into individual numbers using flatMap
  k = k.flatMap(num => num.toString().split('').map(Number));
  
  // count the times d appears in k
  let count = 0;
  for (let j = 0; j < k.length; j++){
    if (k[j] === d){
      count++
    }
  }
  return count
  
}