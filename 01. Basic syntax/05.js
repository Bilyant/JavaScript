function solve(firstN, secondN, operation) {
    let result;
    if (operation == '+') {
        result = firstN + secondN;
    }
    else if (operation == '-') {
        result = firstN - secondN;
    }
    else if (operation == '*') {
        result = firstN * secondN;
    }
    else if (operation == '/') {
        result = firstN / secondN;
    }
    else if (operation == '**') {
        result = firstN ** secondN;
    }
    return result;
};

console.log(solve(5, 5, '**'));