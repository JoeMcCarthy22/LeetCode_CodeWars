/* Description:
Given a string, you need to write a method that order every letter in this string in ascending order.

Also, you should validate that the given string is not empty or null. If so, the method should return:

"Invalid String!"
Notes
• the given string can be lowercase and uppercase.
• the string could include spaces or other special characters like '# ! or ,'. Sort them based on their ASCII codes
Examples
"hello world" => " dehllloorw" */

/*
P: a string, upper or lower case
R: a string  sorted by ASCII code, return "invalid string " if empty or null
E: As above
Ps:
- check for empty or null

-input  split into an array
-sort the array
-join the array and return
*/

function orderWord(s){
  
    if (s == "" || s == null){
      return "Invalid String!"
    } else {
      let array = s.split('')
      return array.sort().join('')
    }  
  }