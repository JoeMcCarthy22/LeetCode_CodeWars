/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number. */

function getSum(a, b){
    // check if they are equal, if so return a
    if (a === b){
      return a
    } else {
        // store the output
      let output = 0
      // sort the numbers in order
      let numbers = [a, b];
      let sorted = numbers.sort((a, b) => a - b);
      // loop through the numbers and add each one to the output, within a, b
      for (let i = sorted[0]; i <= sorted[1]; i++){
        output += i
        }
      return output
    }
     
  }