/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0  */

function persistence(num) {
  // declare a counter for persitence
  let persistenceCounter = 0;
  // Check if the number is 1 digit already, if so, return 0
  if (num < 10) {
    return 0
  } 
  // use a while loop until num is a single digit
  while (num >= 10){
    // split num into a an array of individual digits + convert to number
    num = num.toString().split('').map(Number)
    // use reduce to multiply the digits together and increment count by 1
    num = num.reduce((acc, c) => acc * c, 1)
    persistenceCounter += 1
  }
    return persistenceCounter
}

/*
Parameters: positive number
Return: the number of times you multiply digits in num until you reach a single digit
E: 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
P: 
// Check if the number is 1 digit already
if (num < 10) {
    return 0});
    
// use a while loop to multiply the digits together.
increment a counter each time num > 9


*/