function calc(expr) {
  if (!expr || expr.trim().length === 0) return 0;

  let stack = [];
  let tokens = expr.split(" ");

  for (let token of tokens) {
    if (!isNaN(token)) {
      // number (can be float)
      stack.push(Number(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      let result;

      if (token === '+') result = a + b;
      if (token === '-') result = a - b;
      if (token === '*') result = a * b;
      if (token === '/') result = a / b;

      stack.push(result);
    }
  }

  return stack[0];
}
