/* Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1

*/

/*
P: a string
R: the count of letters and digits in a string
E: as above
Ps:
split and filter the input for only alphabet and numbers
return the length
*/

function countLettersAndDigits(input) {
    let arr = input.split('');
    let result = arr.filter(char => /[a-zA-Z0-9]/.test(char))
    return result.length ;
  }