/* Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 41-60 = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'./*
P: a seat number as a string
R: the seat location as a string in the requested format
E: as above
Ps:
-slice the input string into the number and the letter
-if the number > 60, or letter is not valid, return no seat
-create a result string
-concatenate the section and side and return
*/

function planeSeat(a){
  
    let letter = a.slice(-1);
    let number = a.slice(0, -1);
    
    if (number > 60 || !['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K'].includes(letter)) {
      return 'No Seat!!'
    };
    
    let result = "";
    
    if (number < 21){
      result += 'Front-';
    } else if (number > 20 && number < 41){
      result += 'Middle-';
    } else if (number > 40 && number < 61) {
      result += 'Back-';
    };
    
    if (['A', 'B', 'C'].includes(letter)){
      result += 'Left';
    } else if (['D', 'E', 'F'].includes(letter)){
      result += 'Middle';
    } else {
      result += 'Right';
    }
    
    return result
  
  }