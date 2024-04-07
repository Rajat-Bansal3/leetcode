var groupAnagrams = function (strs) {
  // const res = new Map()
  // for (let i = 0; i < strs.length; i++) {
  //     let tr = strs[i]
  //     let curr = tr.toLowerCase().split("").sort().join("")
  //     if(res.has(curr) ){
  //         res.get(curr).push(strs[i])
  //     }
  //     else{
  //         res.set(curr, [strs[i]])
  //     }
  // }

  // return Array.from(res.values());
  const res = {};
  for (let str of strs) {
    let curr = str.toLowerCase().split("").sort().join("");
    if (!res[curr]) {
      res[curr] = [];
    }
    res[curr].push(str);
  }

  return Object.values(res);
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
