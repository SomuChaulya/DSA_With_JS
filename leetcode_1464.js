/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let n = nums.length;
  let curr_max = nums[0];
  let result = 0;

  for (let i = 1; i < n; i++) {
    result = Math.max(result, (nums[i] - 1) * (curr_max - 1));
    curr_max = Math.max(curr_max, nums[i]);
  }

  return result;
};
