var longestConsecutive = function (nums) {
  let s = new Set(nums);
  let long = 0;
  s.forEach((n) => {
    if (!s.has(n - 1)) {
      let len = 0;
      let cur = n;
      while (s.has(cur)) {
        len += 1;
        cur += 1;
      }
      long = Math.max(long, len);
    }
  });
  return long;
};
let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
