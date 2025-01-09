/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;

/* P: array
R: total number of smiling faces
E: As above
Ps:
Iterate through the array,
if array[i] = smileys
count + 1
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let smileyTotal = 0;
    for (let i = 0; i < arr.length; i++){
      if  (
        arr[i] === ':)' || arr[i] === ':D' || arr[i] === ';)' || arr[i] === ';D' || 
        arr[i] === ':-)' || arr[i] === ':-D' || arr[i] === ';-)' || arr[i] === ';-D' || 
        arr[i] === ':~)' || arr[i] === ':~D' || arr[i] === ';~)' || arr[i] === ';~D'
      ){
        smileyTotal += 1
      }
    }
    return smileyTotal
  }