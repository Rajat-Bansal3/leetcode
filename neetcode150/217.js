var containsDuplicate = function(nums) {
    const set = new Set(nums)
    return nums.length !== set.size
};
let nums = [1,2,3,1]
console.log(containsDuplicate(nums))