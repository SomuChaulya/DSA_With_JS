function twoSum(nums, target) {
  const map = {}; // stores value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [-1, -1]; // if no pair is found
}

// Example usage:
console.log(twoSum([11, 7, 3], 9)); // Output: [1, 2]
