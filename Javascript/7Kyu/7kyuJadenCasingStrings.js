/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:


P: String
R: String in Jaden Caase
E: as Above
Ps: 
Split string into an array of words
map word[0].toUpperCase
join and return

*/

Object.defineProperty(
    String.prototype,
    'toJadenCase',
    { value :
     function toJadenCase() {
       
       // split string into an array of words
       let arr = this.split(' ')
       
       // map each word[0] to upper case
       arr = arr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
       
       return arr.join(' ');
     }
    }
  );