/*Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement a function returning the number of red beads.
If there are less than 2 blue beads return 0.*/

/*
P: n - the number of blue beads
R: the number of red beads - there are 2 red beads between every two blue beads
if there are less than 2 blue beads return 0
E: as above
Ps:
handle edge cases for less than 2 blue beads

n = 2, red = 2
n = 3, red = 4
n = 4, red = 6
n = 5, red = 8

red = 2 * (n - 1)
*/

function countRedBeads(n) {
  
  if (n < 2) return 0;
  
  return 2 * (n - 1);
  
  
}