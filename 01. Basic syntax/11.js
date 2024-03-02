function solve(array) {
    // console.log(array[0] + array[array.length - 1]);
    // console.log(array[0] + array.slice(-1)[0]);
    console.log(array[0] + array.pop());
};

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);
