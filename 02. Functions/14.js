function solve(number) {
    let divisors = []
    for (let i = 1; i < number; i++) {
        
        if (number % i === 0) {
            divisors.push(i)
        }
    }

    let divisorsSum = divisors.reduce((a, b) => a + b);
    if (divisorsSum === number) {
        console.log('We have a perfect number!')
    }
    else {
        console.log('It\'s not so perfect.');
    }
};

solve(28);
solve(6);
solve(1236498);
