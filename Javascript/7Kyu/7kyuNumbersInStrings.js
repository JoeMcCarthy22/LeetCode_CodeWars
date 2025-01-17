/* In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!

Ps - Use regex to find groupings of numbers
- return the Max value of groupings

*/

function solve(s) {
    let numbers = s.match(/\d+/g);
    return Math.max(...numbers)
}