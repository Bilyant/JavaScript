function solve(array) {
    let odds = array.filter(n => n % 2 != 0)
    let evens = array.filter(n => n % 2 == 0)
    let oddsSum = 0;
    let evensSum = 0;
    // let result = evens.reduce ((a, b) => a + b) - odds.reduce ((a, b) => a + b)
    odds.forEach(n => oddsSum += n)
    evens.forEach(n => evensSum += n)
    console.log(evensSum - oddsSum);
};

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);