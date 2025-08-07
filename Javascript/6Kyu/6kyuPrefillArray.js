/*
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

Code Examples

    prefill(3,1) --> [1,1,1]
    
    
parameters are n and v 
n may not always be a number, and v can be anything
few edge cases, but need to return an array of n elements, that all have the same value (v)
try not to use a loop (so map instead? / .array or .fill)
-return 
*/


function prefill(n, v) {
  const num = Number(n);

  if (!Number.isInteger(num) || typeof n == 'boolean'|| num < 0) {
    throw new TypeError(`${n} is invalid`);
  }

  return Array(num).fill(v);
}
