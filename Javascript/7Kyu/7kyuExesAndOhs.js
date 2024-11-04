/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
    // convert to lower case to be case insensitive
    str = str.toLowerCase()
  // create counters to keep track of x and o
  let xCount = 0;
  let oCount = 0;
    // loop through the string and count the number of x + o's, adding to the counters
  for (let i = 0; i <= str.length; i++){
    if (str[i] == 'x'){
      xCount += 1;
    } else if (str[i] == 'o'){
      oCount += 1;
    }  
  };
  // create a boolean to determine the result
  if (xCount === oCount){
    return true
  } else {
    return false
  }
}