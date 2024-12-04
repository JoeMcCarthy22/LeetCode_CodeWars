/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square */

/*
P: integer
R: Return the next square if sq is a perfect square, -1 otherwise
E: as above
Ps: return -1 if not a perfect square
if sq is a perfect square, use a while loop, add +1 to sq until it reaches the next perfect square
*/

function findNextSquare(sq) {
    // return -1 if sq is not a perfect square
    if (!Number.isInteger(Math.sqrt(sq))){
      return -1;
    } else {
      // use a while loop, add +1 to square, until it increments to the next perfect square, then return sq
      sq += 1;
      while (!Number.isInteger(Math.sqrt(sq))){
        sq += 1;
      }
    } return sq
  }