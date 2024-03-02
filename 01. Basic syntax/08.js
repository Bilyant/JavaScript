function solve(data) {
    if (typeof data === 'number'){
        return (Math.PI * data ** 2).toFixed(2)
    }
    return `We can not calculate the circle area, because we receive a ${typeof data}.`
}

console.log(solve(5));
console.log(solve('acd'));
