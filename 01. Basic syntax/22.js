function solve(num) {
    let sum = 0;
    for (const digit of String(num)) {
        sum += Number(digit)
    }
    console.log(sum);
};

solve(245678);
solve(97561);
solve(543);
