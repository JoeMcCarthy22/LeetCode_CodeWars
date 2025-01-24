/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior" */

/*
P: delimited words , string, with dash or underscore
R: The string in camelCase
E: As above
Ps:

*/


function toCamelCase(str) {
    let arr = str.replaceAll('_', '-').split('-');
    let camelCase = arr.map((word, index) => 
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    );
    return camelCase.join('');
  }
  