/*
parameter is number of handshakes
need to return the minimal amount of people in attendance
example - 
1 -> 2 
2 -> 3, 
3 -> 3,
4 -> 4,
5 -> 4,
6 -> 4,

formula for minimal number of handshakes is  (people * (people - 1) / 2)
need to loop until equal or greater than
*/

function getParticipants(handshakes){
  let people = 0;
  let minimalNumberOfHandshakes = (people * (people - 1)) / 2;
  
  while (minimalNumberOfHandshakes < handshakes){
    people++
    minimalNumberOfHandshakes = (people * (people - 1)) / 2;
  }
  
  return people
}