/*
parameters are the length of laps
need to return the number of laps needed until the meet eachother again at the start
example nbrOfLaps(5, 3); // returns [3, 5] nbrOfLaps(4, 6); // returns [3, 2]
ps-
need to find the lowest common multiple of x and y
then divide  lcm by x and y and reutrn?
to find the lcm, need to loop and then use % to check for no remainders
*/

var nbrOfLaps = function (x, y) {
  
 
  
  if (x == y){
    return [1, 1];
    }
  
  let lcm;
  let higher = Math.max(x, y);
  
    

  
  for (let i = higher; i <= x * y; i++){
    if (i % x === 0 && i % y === 0){
      lcm = i;
      break;
    }
  }
  
  return [lcm/x, lcm/y]
  
  
}