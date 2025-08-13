/*
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").



Parameter is a string of word(s)
need to return the stirng, but with all words with length >= 4, abbreviated
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
a word is a sequence of aplhabetical chars
-let result = []
-need to split into words, either by split(), space or non-alphabetical chars
-loop through each word
-if word.length >= 4
-word = word[0] + word.slice + word[word.length - 1]
-push each word to the array, then join and return as a string

*/

function abbreviate(string) {
  return string.replace(/[a-zA-Z]{4,}/g, (word) => {
    return word[0] + (word.length - 2) + word[word.length - 1];
  });
}
