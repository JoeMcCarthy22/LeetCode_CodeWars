/* Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

Examples
[13, 27, 49] returns [62, 27] or (62, 27)

/*
P: array of positive integers
R: the total weight of team 1 and team 2 in an [array]
E: As above
Ps: 
- init new array
- odd numbers => team 1, evens => team 2
- sum and return
*/

function rowWeights(array){
    let sumTeamOne = 0;
    let sumTeamTwo = 0;
    
    // iterate through the input array and sort weights accordingly
    for (let i = 0; i < array.length; i++){
      if (i % 2 == 0){
        sumTeamOne += array[i]
      } else {
        sumTeamTwo += array[i]
      }
    }
    
    return [sumTeamOne, sumTeamTwo]
  }