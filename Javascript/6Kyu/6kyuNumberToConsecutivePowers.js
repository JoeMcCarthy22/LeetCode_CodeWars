/* 
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

The number 89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
89 

Task
We need a function to collect these numbers, that may receive two integers 
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

*/

/*
P: two integers that define the range inclusive
R: an array of sorted numbers that fulfill the property
E: as above
Ps:
creat an empty array = result
loop from i = a, i <= b, i++

if i < 10, then push to result,
else
map each digit to its respective power 
let digit = a[i];
let power = Math.pow(digit, i + 1);

if power == digit
result.push power

return result
*/

function sumDigPow(a, b) {
  
    let result = [];
    
    for (let i = a; i <= b; i++){
      
      if (i < 10){
        result.push(i);
      } else {
       let digits = i.toString().split('');
        let sum = digits.reduce((acc, digit, idx) => {
        return acc + Math.pow(Number(digit), idx + 1);
    }, 0);
    
    if (sum === i) {
      result.push(i);
    }
  }
  
    }
    
    return result
  }
  