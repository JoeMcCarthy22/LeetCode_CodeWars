/*
P: a string
R: a string , with word 1 being even indexed , and word 2 being odd indexed
E: as above
Ps:
create arrays for even and odd index
loop through input string
push to relevant array
join as a string in relevant format
*/


function sortMyString(S) {
  
  let evens = [];
  let odds = [];
  
  for (let i = 0; i < S.length; i++){
    if (i % 2 == 0){
      evens.push(S[i]);
    } else {
      odds.push(S[i]);
    }
  }
  
  return `${evens.join('')} ${odds.join('')}`
  
  
}