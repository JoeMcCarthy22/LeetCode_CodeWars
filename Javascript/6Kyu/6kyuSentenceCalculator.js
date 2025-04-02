/* Sentence Calculator
Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
Other characters: 0 value
Note: input will always be a string*/

/*
P: a string
R: the total score
E: as above
Ps:
-split the string into an array
-use of charCodeAt() is essential
-create different groups for lower case, upper case and numbers
-calculate each score using .reduce() and add together
*/

function lettersToNumbers(s) {
  
    let arr = s.split('');
    
    // create groups for lower, upper and numbers
    let lowerCase = arr.filter(char => /[a-z]/.test(char));
    let upperCase = arr.filter(char => /[A-Z]/.test(char));
    let numbers = arr.filter(char => !isNaN(char) && char !== " "); 
    
    // assign a score to each letter dependent on its casing using map
    
    let lowerCaseScores = lowerCase.map(letter => letter.charCodeAt(0) - 96);
    let upperCaseScores = upperCase.map(letter => (letter.charCodeAt(0) - 64) * 2);
    let numberScores = numbers.map(num => Number(num));
    
    // calculate final scores
    
    let score = 0;
    
    score += lowerCaseScores.reduce((acc, c) => acc + c, 0);
    score += upperCaseScores.reduce((acc, c) => acc + c, 0);
    score += numberScores.reduce((acc, c) => acc + c, 0);
    
    return score
    
    
  }
  