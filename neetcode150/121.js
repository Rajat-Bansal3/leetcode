var maxProfit = function(prices) {

    if(prices.length < 2)return 0

    let min = 10000
    let max_profit = 0
    prices.forEach(price => {
        min = Math.min(min,price)
        max_profit = Math.max(max_profit,price - min)
    });   
    return max_profit
};
console.log(maxProfit([7,1,5,3,6,4]))