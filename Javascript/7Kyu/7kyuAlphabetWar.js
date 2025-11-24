/*
Write a fuenction that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left sife letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only vitcims. Sum up each side's letters' power values to determine which side wins.
parameter is a string of small letters
return statement dependent on outcome of scores
-keep score totals
-loop through string
-update scores
determine outcome
*/



function alphabetWar(fight){
  
  let leftKey = {
    'w' : 4,
    'p' : 3,
    'b' : 2,
    's' : 1
  };
  let rightKey = {
    'm' : 4,
    'q' : 3,
    'd' : 2,
    'z' : 1
  }
  
  let leftScore = 0;
  let rightScore = 0;
  
  for (let char of fight){
    if (leftKey[char]){
      leftScore += leftKey[char]
    } else if (rightKey[char]){
      rightScore += rightKey[char]
    }
  }
  
  if (leftScore === rightScore) return "Let's fight again!"
  
  return leftScore > rightScore ? "Left side wins!" : "Right side wins!"
  

}