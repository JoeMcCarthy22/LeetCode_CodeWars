/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] */

function openOrSenior(data){
    // create an array to return the results in
    let result = []
  // loop through the input list.
    for (let i = 0; i < data.length; i++){
      // if conditions are met, push as a Senior to the result array, else Open category
      if (data[i][0] > 54 && data[i][1] > 7){
        result.push("Senior");
      } else {
      result.push("Open");
      }
    }
    
    return result
  
  }
  
  
  /*
  P: list of pairs [age, handicap]
  R: Open or Senior 
        Senior - both 55+ and handicap > 7
  E: 
  
  Ps: 
  create an array to return the results in
  loop through the input list.
  if (data[i][0] > 54 && data [i][1] > 7){
  array.push("Open")
  } else {
  array.push("Open")
  }
  
  
  
  
  */