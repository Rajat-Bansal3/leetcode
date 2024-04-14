var trap = function (height) {
  const len = height.length;
  let r = len -1
  let l = 0 
  let lmax = 0
  let rmax = 0
  let water = 0
  while (l < r) {
    if(height[l] < height[r]){
        if(height[l] > lmax){
            lmax = height[l]
        }else{
            water += lmax - height[l]
        }
        l++
        }else{
            if(height[r] > rmax){
                rmax = height[r]
            }else{
                water += rmax - height[r]
            }
            r--
        }
    }
    return water
  }
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))