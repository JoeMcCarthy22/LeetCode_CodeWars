/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  
  let vowelCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (let i = 0; i < str.length; i++){
    if (str[i].includes(vowels)){
      vowelCount++
    }
  }
  
  return vowelCount;

}