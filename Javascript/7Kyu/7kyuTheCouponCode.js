/* Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false */

/*
P: string for the enteredCode and correctCode, and stirngs for the dates
R: true if coupon is valid, false if not
E: as above
Ps: 
- check if enteredCode == correctCode, return false if not 
- work out the dates - convert to date objects

*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
    // check the codes match
    if (enteredCode !== correctCode){
      return false
    }
    
    // convert the currentDate and expirationDate to date objects
    currentDate = new Date(currentDate);
    expirationDate = new Date(expirationDate);
    
    // compare the dates
    if (currentDate > expirationDate){
      return false
    } else {
      return true
    }
    
  }