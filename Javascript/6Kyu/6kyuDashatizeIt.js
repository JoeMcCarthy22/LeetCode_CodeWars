/*
input is an integer
need to retrun a string with - before and after each odd digit, besides the start and end
274 -> '2-7-4'
-toString and split the input
-loop through the string
-if string[i] is odd then add dashes before and after
-loop through again, and if there are double dashes, remove one,
-remove the dashes at start and end if necessary - or maybe use .trin() if loop is oob
*/

function dashatize(num) {
  if (num === null || isNaN(num)) return 'NaN';

  let numStr = Math.abs(num).toString().split('');
  let result = [];

  for (let i = 0; i < numStr.length; i++) {
    let current = parseInt(numStr[i]);

    if (current % 2 === 0) {
      result.push(current);
    } else {
      // Add dash before if last wasn't dash
      if (result[result.length - 1] !== '-') {
        result.push('-');
      }
      result.push(current);
      // Add dash after unless next char is even or we're at the end
      if (i < numStr.length - 1) {
        result.push('-');
      }
    }
  }

  return result.join('').replace(/--+/g, '-').replace(/^[-]+|[-]+$/g, '');
}
