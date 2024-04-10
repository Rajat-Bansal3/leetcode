const isAlphanumeric = (s) =>{
    return /[a-z0-9]/.test(s)
}
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let left = 0
    let right = s.length -1
    while(left < right){
        if (!isAlphanumeric(s[left])) {
            left++
        }
        else if (!isAlphanumeric(s[right])) {
            right--
        }
        else if(s[left] !== s[right]){
            return false
        }
        else{
            left++
            right--
        }
    }
    return true

};
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))