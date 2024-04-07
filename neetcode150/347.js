var topKFrequent = function(nums, k) {
    let res = nums.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    let entries = Object.entries(res);
    console.log(entries)

    entries.sort((a, b) => b[1] - a[1]);

    let topKFrequentArray = entries.slice(0, k);
    let result = topKFrequentArray.map(entry => parseInt(entry[0]));
    return result;
};

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;
console.log(topKFrequent(nums, k));
