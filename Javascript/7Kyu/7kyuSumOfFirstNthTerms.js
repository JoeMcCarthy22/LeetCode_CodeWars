/* Task
Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

You will need to figure out the rule of the series to complete this.
Rules
You need to round the answer to 2 decimal places and return it as String.
If the given value is 0 then it should return "0.00".
You will only be given Natural Numbers as arguments.

Examples (Input --> Output)
n
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */

function SeriesSum(n) {
    let sum = 0 
    let denominator = 1
    for (let i = 1; i <= n; i++){
      sum += 1 / denominator
      denominator += 3
    }
    
    return sum.toFixed(2)
  }
  
  /*
  P: number
  R: You need to round the answer to 2 decimal places and return it as String.
  E: 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
  Ps:
  
  The rule of the series is that the denominator increases by 3
  let sum = 0 
  let denominator = 1
  
  for (let i = 1, i <= n, i++){
      sum += 1 / denominator
      denominator += 3
  }
  
  return sum.toFixed(2)
  
  
  
  
  */