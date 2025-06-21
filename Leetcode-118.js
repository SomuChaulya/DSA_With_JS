//pascal triangle 0(n^2) leetcode 118
// Given an integer numRows, return the first numRows of Pascal's triangle.

function generate(numRows) {
  result = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 1; j < i; j++) {
      if (j === 0 || j === 1) {
        row.push(1);
      } else {
        let num = result[i - 1][j] + result[i - 1][j - 1];
        row.push(num);
      }
    }
  }
  return result;
}
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
