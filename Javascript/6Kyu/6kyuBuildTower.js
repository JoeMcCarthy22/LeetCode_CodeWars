/* Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] 

/*
Parameters - nfloors number of floors
Return - a tower of "*" as strings
Example - As above
Pseudocode:
create a tower array
use a for loop to loop through floors
concatenate the spaces and stars
push to tower
return tower
*/

function towerBuilder(nFloors) {
  
    let tower = [];
    
    for (let i = 0; i < nFloors; i++){
      let spaces = " ".repeat(nFloors - i - 1);
      let stars = "*".repeat(2 * i + 1);
      tower.push(spaces + stars + spaces)
    }
    
    return tower
  }