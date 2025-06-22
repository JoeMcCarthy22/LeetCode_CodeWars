/* My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
In honor of my grandfather's memory we will write a function using his formula!
Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86 */

/*
parameters - we have 8 ages, all numbers
we need to return a number using the formula:
1) multiply each number by itself
- put each age in an array - change the parameters to ...ages using spread
- use forEach to multiply by itself
2) add them all together
- use .reduce
3) take the sqrt of the result
4) divide by two and return
*/

function predictAge(...ages){
  let multiples = ages.map(num => num * num);
  let total = multiples.reduce((acc, c) => acc + c, 0);
  return Math.floor(Math.sqrt(total) / 2)
}