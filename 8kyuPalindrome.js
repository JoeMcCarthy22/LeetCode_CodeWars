/* Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards */

function isPalindrome(x) {
    x = x.toLowerCase()
    let reverseString = x.split('')
                        .reverse()
                        .join('');
    return reverseString === x
  
  }