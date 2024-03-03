function solve(...numbers) {
    let factorials = [];
    let result;

    for (let i = 0; i < numbers.length; i++) {
        let factorial = 1;
        
        for (let n = 1; n <= numbers[i]; n++) {
            factorial *= n;
        }

        factorials.push(factorial);
    }

    result = factorials[0] / factorials[1]
    console.log(`${result.toFixed(2)}`);
};

solve(5, 2);
solve(6, 2);