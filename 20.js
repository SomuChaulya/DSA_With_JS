/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let ch of s) {
    if (Object.values(pairs).includes(ch)) {
      stack.push(ch);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs[ch]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};
