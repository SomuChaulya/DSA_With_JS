// Find the Difference | 3 Approaches | Phone Interview | AMAZON | Leetcode - 389

var findTheDifference = function (s, t) {
  let xor = 0;

  for (let ch of s) {
    xor ^= ch.charCodeAt(0); // প্রতিটি অক্ষরের ASCII কোডের সাথে XOR
  }

  for (let ch of t) {
    xor ^= ch.charCodeAt(0);
  }

  return String.fromCharCode(xor); // শেষের ফলাফল ASCII থেকে ক্যারেক্টারে রূপান্তর
};
console.log(findTheDifference("abcd", "abcde")); // Output: "e"
