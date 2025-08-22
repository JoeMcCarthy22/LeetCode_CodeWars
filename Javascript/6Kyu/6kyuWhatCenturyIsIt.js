/*
parameter is a 4 digit string
need to return the century correlating to the string
-new centuries start from the year xxx1
-Number - access the first 2 digits to establish first pass of century
-if the last digit < 1, century stays the same, otherwise century ++
-return in string format
*/

function whatCentury(year){
  
  let century = Number(year.slice(0,2));
  let thousandsYear = Number(year[year.length - 4]);
  let hundredsYear = Number(year[year.length - 3]);
  let tensYear = Number(year[year.length - 2]);
  let finalYear = Number(year[year.length - 1]);
  
  if (Number(year.slice(2)) >= 1){
  century++
  }

  
  let suffix = 'th';
  let lastTwo = century % 100;
  let lastDigit = century % 10;

  if (lastTwo !== 11 && lastTwo !== 12 && lastTwo !== 13) {
    if (lastDigit === 1) suffix = 'st';
    else if (lastDigit === 2) suffix = 'nd';
    else if (lastDigit === 3) suffix = 'rd';
  }
  
  return `${century}${suffix}`
  
                         
                
  
}