function solve(firstN, secondN, operation) {
    let result;

    if (operation === 'multiply') {
        result = firstN * secondN;
    }
    else if (operation === 'divide') {
        result = firstN / secondN;
    }
    else if (operation === 'add') {
        result = firstN + secondN;
    }
    else if (operation === 'subtract') {
        result = firstN - secondN;
    }

    console.log(result);
};

solve(5, 5, 'multiply');
solve(40, 8, 'divide');
solve(12, 19, 'add');
solve(50, 13, 'subtract');
