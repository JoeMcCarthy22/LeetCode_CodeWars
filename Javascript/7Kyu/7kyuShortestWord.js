/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
    s = s.split(' ');
    s = s.sort((a, b) => a.length - b.length);
    let shortestWord = s[0]
    return shortestWord.length
  }