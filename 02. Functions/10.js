function solve(number) {
    let numbersAsString = String(number)
    let evensSum = 0;
    let oddsSum = 0;

    for (let i = 0; i < numbersAsString.length; i++) {
        let currentNumber = Number(numbersAsString[i])

        if (numbersAsString[i] % 2 === 0) {
            evensSum += currentNumber
        }
        else {
            oddsSum += currentNumber
        }
    }

    console.log(`Odd sum = ${oddsSum}, Even sum = ${evensSum}`)
};

solve(1000435);
solve(3495892137259234);
