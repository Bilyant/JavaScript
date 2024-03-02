function solve(array) {
    let numbers = array.slice()
    let result = []
    for (let i = 0; i < array.length; i++) {
        let num;
        if (i % 2 === 0) {
            num = Math.min(...numbers)
        }
        else {
            num = Math.max(...numbers)
        }
        result.push(num)
        numbers.splice(numbers.indexOf(num), 1)
    }
    console.log(result);
};

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
