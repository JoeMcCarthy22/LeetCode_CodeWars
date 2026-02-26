function add(num1, num2) {
  let numstr1 = num1.toString().split('').reverse();
  let numstr2 = num2.toString().split('').reverse();

  let result = [];
  let longest = Math.max(numstr1.length, numstr2.length);

  for (let i = 0; i < longest; i++) {
    let digit1 = Number(numstr1[i] || 0);
    let digit2 = Number(numstr2[i] || 0);
    result.push(digit1 + digit2);
  }

  return result.reverse().join('');
}