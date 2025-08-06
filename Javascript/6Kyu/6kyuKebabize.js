/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"


input is a camelCase string
need to return the string in kebab - i.e needs to have a dash between words - before each cap
-split the string into an array
-loop through the array
-check for capital letter arr[i] === arr[i].toLowerCase()
-if capital letter, then


*/

function kebabize(str) {
  let kebab = [];
  let inputArr = str.replace(/[^a-zA-Z]/g, '').split('');
  
  for (let i = 0; i < inputArr.length; i++){
    let current = inputArr[i];
    
    if (i !== 0 && current == current.toUpperCase()){
      kebab.push(`-${current}`);
    } else {
      kebab.push(current);
    }
  }
  
  return kebab.join('').toLowerCase()
}