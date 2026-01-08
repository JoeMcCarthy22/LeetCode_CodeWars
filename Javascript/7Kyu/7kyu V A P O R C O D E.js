/*
Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

parameter is a string
return a string with:
-all letters uppercase
-two spaces between each letter or special char
-spaces should be ignored

ps:
-split the string into an array
-filter for spaces
-loop through the array
-convert each char to uppercase 
-join and then  and return


*/

function vaporcode(string) {
  
  return string.split('')
                .filter((x) => x !== ' ')
                .map((char) => char.toUpperCase())
                .join('  ') 
}