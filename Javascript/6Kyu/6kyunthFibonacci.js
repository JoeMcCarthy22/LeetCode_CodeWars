/*
given a number (n)
return the nth number of the fibonacci sequence
-use a loop to generate the fibonacci sequence
-each number is the sum of the two preceding
-store in an array
*/


function nthFibo(n) {
  
  let fibs = [0, 1];
  
  for (let i = 2; i <= n; i++){
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }
  
  return fibs[n - 1]
  
  }
  
  