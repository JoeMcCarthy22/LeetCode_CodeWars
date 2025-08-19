/*
Parameters are the fighters - an array of 2 nested arrays - the cursor start positon (e.g 0,0) and then the programmed cursorary moves
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
need to return a list of the fighters that the cursor has hovered over

-create an array to store the rsult
-use the position of row, col to establish each fighter
-push each character to the result array
-return the result array
*/


function streetFighterSelection(fighters, position, moves) {
  let result = [];
  
  // Destructure starting row and column
  let row = position[0];
  let col = position[1];
  
  for (let move of moves) {
    if (move === 'left') {
      col = (col - 1 + 6) % 6;  // wrap around left
    } else if (move === 'right') {
      col = (col + 1) % 6;      // wrap around right
    } else if (move === 'up') {
      row = Math.max(0, row - 1);  // clamp at top row
    } else if (move === 'down') {
      row = Math.min(1, row + 1);  // clamp at bottom row
    }
    
    // Push the fighter at current position
    result.push(fighters[row][col]);
  }
  
  return result;
}