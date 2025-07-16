/*
parameter is consecutive terms of a given series of numbers - array
return the missing term
example as above
missing term is never the first or the last
always at least 3 numbers long
-calculate the average difference between elements
-store the average in an array, then use reduce to calculate the average and use .floor()
-loop through the array, and add the average value to each element,
-if average + element !== next element, then need to return this sum as the missing value
*/

function findMissing(list) {  
  
  let averageDifference = [];
  
  for (let i = 0; i < list.length - 1; i++){
    let difference = list[i + 1] - list[i];
    averageDifference.push(difference)
  }
  
  let total = averageDifference.reduce((acc, c) => acc + c, 0);
  let average = total / averageDifference.length;
  let roundedAverage = Math.round(average);

  
  for (let i = 0; i < list.length - 1; i++){
    let current = list[i];
    let next = list[i + 1];
    if (current + roundedAverage !== next){
      return current + roundedAverage;
    }
  }
}