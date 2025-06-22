/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const arr = new Array(26).fill(0);
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    arr[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (arr[ch.charCodeAt(0) - "a".charCodeAt(0)] === 1) {
      return i;
    }
  }

  return -1;
};
