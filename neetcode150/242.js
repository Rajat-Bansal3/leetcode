var isAnagram = function (s, t) {
  if(s.length != t.length) {
    return false
}

var charArray = Array(26).fill(0)

for(var i = 0; i < s.length;i++) {
    charArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    charArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--

    console.log(charArray)
}
console.log(charArray)
return charArray.every(count => count == 0)
};
let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t));
