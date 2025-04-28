/* 14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"*/


/**
 * @param {string[]} strs
 * @return {string}

 parameters = an array of strings
 return the most common prefix i.e the prefix itself
 or if none, return an empty string

 example Input: strs = ["flower","flow","flight"]
Output: "fl"

pseudocode:

identify the prefix and store it
if there are multiple prefixes, then a count for each prefix will need to be init,
return the one with the highrst count

loop through the each word and compare prefixes

 */
var longestCommonPrefix = function(strs) {

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) { // loop over each character index of the first word
        let char = strs[0][i]; // character at position i in the first word

            for (let j = 1; j < strs.length; j++) { // check this character across the other words
                if (strs[j][i] !== char || i >= strs[j].length) {
                    // if mismatch or word is too short
                    return prefix;
                }
            }

    prefix += char; // if all words matched at this character, add it to the prefix
}

    
};