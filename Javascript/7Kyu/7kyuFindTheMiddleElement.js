/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0 */

function gimme (triplet) {
  let tripletCopy = triplet.slice()
  let middleElement = tripletCopy.sort((a, b) => a - b)[1]
  return triplet.indexOf(middleElement)

}

/* Parameter : Triple
Return: indexOf the middle element
Example: gimme([2, 3, 1]) => 0
PC: 

create a copy of the array using slice

find the middle element by using sort, and then it will be index 1

 use indexOf(middle element) on the original array */