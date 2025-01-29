/*

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str == "" return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
("123456987654", 6) --> "234561876549"
("123456987653", 6) --> "234561356789"
("66443875", 4) --> "44668753"
("66443875", 8) --> "64438756"
("664438769", 8) --> "67834466"
("123456779", 8) --> "23456771"
("", 8) --> ""
("123456779", 0) --> "" 
("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".


P: string of digits
R: a string of chunks as per the instructions (
Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).)
E: as above
P:
return "" for edge cases
cut the string into chunks of size sz (push into an array)

*/


function revrot(str, sz) {
   
    // return "" for edge cases
    if (sz <= 0 || str == "" || sz > str.length) {
      return ""
    }
    
    // cut the string into chunks of size sz (arrays)
    let arr = [];
    
    for (let i = 0; i + sz <= str.length; i += sz){
      let chunk = str.slice(i, i + sz).split('');
      
      // reverse or rotate the chunk and push to the array
      if (chunk.reduce((acc, c) => acc + parseInt(c), 0) % 2 == 0) {
        arr.push(chunk.reverse().join(''));
      } else {
        chunk.push(chunk.shift());
        arr.push(chunk.join(''))
      }
      
    }
    
    return arr.join('')
    
  }