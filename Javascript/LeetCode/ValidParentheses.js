/* 20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true
Example 2:
Input: s = "()[]{}"
Output: true
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.*/

/**
 * @param {string} s
 * @return {boolean}

 parameter is a string
 return true if the conditions are met
 example as above
 - use a stack?
 let stack = [];
 loop through the input string;
 if it is an opening bracket, push to the stack,
 if its a closing bracket, if its empty, return false, or  peek at the stack, and if it doesnt match up, return false
 use a hashmap to define matching brackets

 */
var isValid = function(s) {

    let stack = [];

    const matching = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
 

    for (let i = 0; i < s.length; i++){
        let char = s[i];
        if (char === '(' || char === '[' || char === '{'){
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}'){
            if (stack.length === 0){
                return false
            } else if (char === ')' || char === ']' || char === '}') {
                let top = stack[stack.length - 1];
                if (top === matching[char]) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        
    }

    return stack.length === 0;
    
};