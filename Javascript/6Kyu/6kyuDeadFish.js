/*
Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.

Examples
Program "iiisdoso" should return numbers [8, 64].
Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
input is a string?
need to return the deadfish value as an array
i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
-filter thearray string for any non intruction values
-create a single value
-program the logic as above

*/

function parse( data ){
  
  let instructions = data.split('').filter(char => ['i', 'd', 's', 'o'].includes(char));
  
  let singleValue = 0;
  let outputArray = [];
  
  for (let inst of instructions){
    if (inst === 'i'){
      singleValue++;
    } else if (inst === 'd'){
      singleValue--;
    } else if (inst === 's'){
      singleValue = singleValue ** 2
    } else if (inst === 'o'){
      outputArray.push(singleValue);
    }  
  }
  
  return outputArray;
}
