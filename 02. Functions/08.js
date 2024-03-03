function solve(firstN, secondN, thirdN) {
    
    function sum (firstN, secondN) {
        return firstN + secondN
    }

    function subtract (thirdN) {
        return sum(firstN, secondN) - thirdN
    }

    console.log(subtract(thirdN))
};

solve(23, 6, 10);
solve(1, 17, 30);
