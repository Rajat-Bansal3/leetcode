var productExceptSelf = function(nums) {
    let n = nums.length
    let res = []

    let lef = 1
    for (let i = 0; i < n; i++) {
        res[i] = lef
        lef *= nums[i]
        // console.log(res)
    }
    
    let rig = 1
    for (let j = n - 1; j >= 0; j--) {
        res[j] *= rig
        rig *= nums[j]
        // console.log(res)
    }
    return res
};
let nums = [10,1,2,3,4]
console.log(productExceptSelf(nums))
{/*
    const len = nums.length
    let pre = 1
    let suf = 1
    let arr = Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        arr[i] = pre
        pre *= nums[i] 
    }
    for (let i = len-1; i >= 0; i--) {
        arr[i] *= suf
        suf *= nums[i]
    }
    return arr
*/}