function solve(firstN, secondN, thirdN) {
    let largestN = Math.max(firstN, secondN, thirdN) 
    return `The largest number is ${largestN}`
};

console.log(solve(5, 10, 15));
