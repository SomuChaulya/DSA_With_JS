// Divide Array Into Arrays With Max Difference | Why Sorting | Google | Leetcode 2966

let dividearray = function (nums, k) {
  const arrSize = nums.length;
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= arrSize; i += 3) {
    if (nums[i + 2] - nums[i] > k) {
      return [];
    }
    result.push([nums[i], nums[i + 1], nums[i + 1]]);
  }
};
