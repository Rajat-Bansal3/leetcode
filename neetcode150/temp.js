const fruits = ['apple', 'apple', 'banana', 'banana', 'orange', 'pear', 'apple']
console.log(fruits.reduce((acc , curr) =>{
    if(acc[curr]){
        acc[curr]++
    }else{
        acc[curr] = 1
    }
    return acc
},{}))