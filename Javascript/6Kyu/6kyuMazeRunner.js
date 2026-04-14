/*
Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. 
If you reach the end point before all your moves have gone, you should return Finish. 
If you hit any walls or go outside the maze border, you should return Dead. 
If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
Good luck, and stay safe!

Params are the maze (a 2d array) and the directions (an array)
need to return finish, dead, or lost

need to loop through the directions
need to find the start position too

now the SP is located, can loop through the directions

need to track 2 things: the new coordinate, and the key

for the coordinate:
x is the index, y is the array [x, y]

if N, then need to array -1, index stays the same
if S, then array + 1, index stays the same
if E, array constant, index +1
is W, array constant, index -1

while key == 0, continue
if the key == 1, return dead
if key == 3 and i == directions[directions.length-1] return Finish

*/

function mazeRunner(maze, directions) {
  
  let y;
  let x;

  
  //locate the start position
  for (let i = 0; i < maze.length; i++){
    if (maze[i].includes(2)){
      y = i;
      x = maze[i].indexOf(2);
    } 
  }
  
  // loop through the directions and update position accordingly - move first, then consider the number key
  for (let i = 0; i < directions.length; i++){
    
    if (directions[i] === 'N') {
         y--;
      } else if (directions[i] === 'E') {
        x++;
      } else if (directions[i] === 'S') {
        y++;
      } else if (directions[i] === 'W') {
        x--;
      }
    
      if (y < 0 || y >= maze.length || x < 0 || x >= maze.length) {
          return "Dead";
        }
    
    // consider the key and consider outcome
    
    let cell = maze[y][x];
    
    if (cell === 1){
      return "Dead"
    } else if (cell === 3){
      return "Finish"
    }     
  }
  return "Lost"
}