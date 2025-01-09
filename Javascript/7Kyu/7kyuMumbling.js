/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

/* P: string
R: the string, but each letter * its position in the string, first is a capital, rest lower
E: As above
Ps:
- convert the string to lower case
- split it into an array
- multiply each letter by its index
- handle the lower cases
- .join('-')
return
*/


function accum(s) {
	s = s.toUpperCase().split('');
  
  // First letter stays Upper, add lower case repeated by the index
  for (let i = 0; i < s.length; i++){
    s[i] = s[i] + s[i].repeat(i).toLowerCase()
  }
  
  return s.join('-')
  
}