var maxArea = function(height) {
    const len = height.length
    let water = 0

    let l = 0
    let r = len - 1

    while (l < r) {
        let width = r - l
        let area = width * Math.min(height[l], height[r])
        water = Math.max(water, area)

        if(height[l] < height[r]){
            l++
        }else r--
    }



    return water
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))