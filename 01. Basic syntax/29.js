function solve(numbers, times) {
    for (let i = 0; i < times; i++) {
        numbers.push(numbers.shift())
    }
    console.log(numbers.join(' '));
};

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4)
solve([2, 4, 15, 31], 5)

