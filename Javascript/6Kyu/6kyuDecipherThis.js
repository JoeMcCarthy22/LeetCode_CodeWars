/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces
Examples

'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go'


parameters we have a string cont numbers and letters
need to return a string, converted using the code
ps;

first, split the string into an array of words - use .split(' ');
then for each word =>
                      
                      char code may be two or three chars
                      loop through each word
                      while char >= '0' && char <= '9' - check for nums 
          

i
join and return
          
*/



function decipherThis(str) {
  
  
          let words = str.split(' ');
          

          for (let i = 0; i < words.length; i++){
            
            let word = words[i]
            
            let j = 0;
            while (word[j] >= '0' && word[j] <= '9'){
              j++;
            }
            
            let numbersPart = word.slice(0, j);
            let lettersPart = word.slice(j);
            
            
            let newChar = String.fromCharCode(Number(numbersPart));
            let first = lettersPart[0];
            let last = lettersPart[lettersPart.length-1];
            
            
            let newLetters = lettersPart.slice(1, -1);
            let decipheredWord = `${newChar}${last}${newLetters}${first}`
            
            words[i] = decipheredWord
          }
  
  return words.join(' ');
                


}

