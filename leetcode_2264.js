var largestGoodInteger = function (num) {
  let maxchar = "";

  for (let i = 2; i < num.length; i++) {
    if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
      const curr = num[i].repeat(3);
      if (curr > maxchar) {
        maxchar = curr;
      }
    }
  }

  return maxchar;
};
