/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  const n = num.length;

  for (let i = n - 1; i >= 0; i--) {
    const digit = parseInt(num[i]);
    if (digit % 2 !== 0) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};
