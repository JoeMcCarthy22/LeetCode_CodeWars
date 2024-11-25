/* Challenge: Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string is an isogram. Assume the empty string is an isogram. Ignore letter case.

Examples:
"Dermatoglyphics" → true
"aba" → false
"moOse" → false (ignore letter case)
*/

function isIsogram(str) {
    let array = str.split('').toLowerCase();
    for (let i = 0; i < array.length; i++){
        if (array.slice(0, i).includes(array[i])) {
            return false;
        }};
        
        return true
    }
  
/*
P: string
R: true if NO repeating letters, else false
E: as above
Ps:
Loop through the string
Create an array to keep track of characters 'seen'
slice through the array from the start to the character (0, i) and check if includes()

*/