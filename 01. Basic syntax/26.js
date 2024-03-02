function solve(number) {
    number = String(number)
    let areDifferent = true
    let sum = 0
    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] !== number[i + 1]) {
            areDifferent = false
        }
        sum += Number(number[i])
    }
    sum += Number(number[number.length - 1])
    console.log(areDifferent);
    console.log(sum);
};

solve(2222222);
solve(1234);