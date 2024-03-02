// the weight in the parameter is in grams

function solve(fruit, weight, price) {
    let weightKg = (weight/1000).toFixed(2)
    let moneyNeeded = (weightKg * price).toFixed(2)
    console.log(`I need ${moneyNeeded} to buy ${weightKg} kilograms ${fruit}.`);
};

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);