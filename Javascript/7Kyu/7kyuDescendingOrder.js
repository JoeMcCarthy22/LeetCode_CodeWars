/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

function descendingOrder(n){
    // convert to a string
    n = n.toString()
    // split the string into an array
    n = n.split('')
    //sort the number
    n = n.sort((a, b) => b - a)
    // convert to a number, join and return
    return Number(n.join(''))
    
  }