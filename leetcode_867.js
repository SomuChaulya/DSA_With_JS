let cols = matrix.length;
let rows = matrix[0].length;

let res = new Array(rows);

for (let i = 0; i < res.length; i++) {
  res[i] = new Array(cols);
}

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    res[j][i] = matrix[i][j];
  }
}
return res;
