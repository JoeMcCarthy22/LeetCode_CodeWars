/*
P: a string made of digits
R: a string where each digit is repeated * its value
Ps: split the string into an array
create a seperate result array
loop through input
push each digit x times 
join and returns
*/



function explode(s) {
  
  let input = s.split('');
  let output = [];
  
  for (let i = 0; i < input.length; i++){
    output.push(input[i].repeat(input[i]))
  }
  
  return output.join('');
  
}