/*
You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#, RAX:RDX in NASM, std::pair<std::size_t, std::size_t> in C++) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be a square (NxN), and there will only be one mine in the array.
Parameter is an array of arrays (NxN) all 0s apart from 1 (bomb)
need to return the coordinates of the bomb as [x, x]
Example: [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] --> [0, 0]
[ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] --> [2, 1]
(Along the corridor, up the stairs)
Ps:
x coordinate the harder to find - need to loop through each array and keep count
y coordinate not so bad

loop through the field
let x = 0
then a nested loop through each minifield
if a minifield does not contain a bomb, x++

  let patch = minifield[j];

if it does contain a bomb, 
use its index within the minifield to calculate the y coord
use indexOf(1)




*/


function mineLocation(field){
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < field.length; i++){
    let minifield = field[i];
    
    
    for (let j = 0; j < minifield.length; j++){
      if (!minifield.includes(1)){
        continue;
      } else if (minifield.includes(1)){
        x = i;
        y = minifield.indexOf(1);        
      }
    }
    }
  
  return [x, y]
  }
