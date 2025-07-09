/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.


parameter is an array of numbers in blocks of 8 char bits
need to return the array, but with the bit order reversed
example as above

-create a result array
-loop backwards through the data array
-use slice to extract 8 elements at a time
-push to result array
*/

function dataReverse(data) {
  
  let resultArray = [];
  let segmentSize = 8;
  
  for (let i = data.length - segmentSize; i >= 0; i -= segmentSize){
    let segment = data.slice(i, i + segmentSize);
    resultArray.push(...segment); 
  }
  
  return resultArray
  
}