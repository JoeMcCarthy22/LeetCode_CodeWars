var runLengthEncoding = function(str) {
  let result = [];
  
  let currentChar = str[0];
  let count = 1;
  
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++; // same char → increase count
    } else {
      result.push([count, currentChar]); // push previous run
      currentChar = str[i]; // switch to new char
      count = 1; // reset count
    }
  }
  
  // push the final run
  result.push([count, currentChar]);
  
  return result;
}