var lengthOfLongestSubstring = function (s) {
  const l = new Array(256).fill(-1);
  let max_len = 0;
  let start = -1;
  for (let i = 0; i < s.length; i++) {
    if (l[s[i]] > start) {
      start = l[s[i]];
    }
    l[s[i]] = i;
    max_len = Math.max(max_len, i - start);
  }
  return max_len;
};
(lengthOfLongestSubstring("pwwkew"));
