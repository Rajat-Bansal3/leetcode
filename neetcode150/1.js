var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const t = target - nums[i];
    if (map.has(t)) {
      return [map.get(t), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
