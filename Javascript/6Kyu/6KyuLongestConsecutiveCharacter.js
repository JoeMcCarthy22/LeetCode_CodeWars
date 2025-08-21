/*

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.


parameter is a string
return [c, l] char, length of rep
edge case for empty string
-loop from left to right
- use two pointers
-one to keep track of current streak
-one to keep track of longest streak found so far
*/

function longestRepetition(s) {
  
  if (s === "") return ["",0];
  
  let longestStreak = 1;
  let currentStreak = 1;
  let char = s[0];
  
  
  for (let i = 0; i < s.length - 1; i++){

    if (s[i] === s[ i + 1]){
      currentStreak++
    } else {
      currentStreak = 1
    }
    
    if (currentStreak > longestStreak){
      longestStreak = currentStreak
      char = s[i]
    }
  
    }
  
  return [char, longestStreak]
}