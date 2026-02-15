/*

Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

loop through a year
start on Jan 1st ,
if day = friday and date = 13th, counter ++
return counter

*/


function unluckyDays(year){
  
  let counter = 0;
 
  
  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13); // 13th day of the month
    if (date.getDay() === 5) { // 5 means Friday
      counter++;
    }
  }
  
  return counter
  
  
  
}