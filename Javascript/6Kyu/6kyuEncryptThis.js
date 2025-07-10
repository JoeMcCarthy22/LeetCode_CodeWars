/*Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"*/


var encryptThis = function(text) {
  if (text.length === 0) return "";

  let arr = text.split(' ');
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    if (word.length === 1) {
      result.push(word.charCodeAt(0).toString());
    } else if (word.length === 2) {
      result.push(word.charCodeAt(0) + word[1]);
    } else {
      const firstCharCode = word.charCodeAt(0);
      const lastLetter = word[word.length - 1];
      const secondLetter = word[1];
      const middle = word.slice(2, word.length - 1);

      result.push(firstCharCode + lastLetter + middle + secondLetter);
    }
  }

  return result.join(' ');
};
