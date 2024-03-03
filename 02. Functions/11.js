function solve(integers) {

    for (const integer of integers) {
        
        let currentEl = String(integer)
        .split('')
        .reverse()
        .join('')
        
        console.log(currentEl == integer);
    }
};

solve([123,323,421,121]);
