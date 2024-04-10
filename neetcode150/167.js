var twoSum = function(numbers, target) {
     let right = numbers.length - 1
    let left = 0
    while (left < right ){
        let sum = numbers[left] + numbers[right]
        if(sum == target){
            return [left + 1 , right + 1]
        }else if (sum > target){
            right --
        }else{
            left ++
        }
    }
    return []
};
console.log(twoSum([2,7,11,15] , 9))