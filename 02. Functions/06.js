function solve(firstN, secondN, thirdN) {
    let negativesCount = 0;
    
    if (firstN < 0) {
        negativesCount ++;
    };
    if (secondN < 0) {
        negativesCount ++;
    };
    if (thirdN < 0) {
        negativesCount ++;
    };

    if (negativesCount % 2 === 0) {
        console.log('Positive')
    }
    else {
        console.log('Negative')
    }

};

solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);