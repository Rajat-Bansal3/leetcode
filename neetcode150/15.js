var threeSum = function(nums) {
    nums = nums.sort((a,b)=> a - b)
    let res = []
    for (let i = 0; i < nums.length -1; i++) {
        let element = -nums[i];
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const sum = nums[left] + nums[right]
            if (sum === element) {
                res.push([nums[left] , nums[i] , nums[right]])

                while (left < right && nums[left] === nums[i+1]) left++
                while (left < right && nums[right] === nums[i-1]) right--
                left++
                right--
            }else if(sum < element) {left++}
            else {right--}
        }
    }

    return res
};
console.log(threeSum([-1,0,1,2,-1,-4]))