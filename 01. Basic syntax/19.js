function solve(year) {
    let isLeapYear = false

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)  {
        isLeapYear = true
    }

    if (isLeapYear) {
        console.log('yes');
    } else {
        console.log('no');
    }
};

solve(1984);
solve(2003);
solve(4);
