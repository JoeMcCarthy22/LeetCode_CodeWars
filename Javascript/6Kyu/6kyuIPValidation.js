/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values betwseen 0 and 255, inclusive.
Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string */

/*
Parameter is a string,
return true if it is a valid IP adress of 4 octets, values between 0-255, no leading 0s
example as above
ps:

-check there arent too many dots by using split and checking the length >4
-we need to split the octets up by using .split('.')
-once we have split the octets up, we need to loop through each one and check the value is within range and not leading 0, using nested loops

*/

function isValidIP(str) {
  
  const dotCount = str.split('.').length - 1;
  if (dotCount !== 3) return false;
  
  let octets = str.split('.');
  
  for (let i = 0; i < octets.length; i++) {
    const octet = octets[i];
    
    if (
    octet === "" ||                     // empty string check
    !/^\d+$/.test(octet) ||                     // not a number
    (octet.length > 1 && octet[0] === '0') ||  // leading zero
    Number(octet) < 0 || Number(octet) > 255  // range check
    ) {
  return false;
  }
}
  
return true

  
}