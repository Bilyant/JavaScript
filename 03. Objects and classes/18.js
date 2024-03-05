function solve(carNumbers) {
    let carsInParking = [];
    
    for (let i = 0; i < carNumbers.length; i++) {
        
        let [command, number] = carNumbers[i].split(', ');
        
        if (command == 'IN') {
            carsInParking.push(number)
        }
        else if (command == 'OUT') {
            carsInParking.splice(carsInParking.indexOf(number), 1);
        };
    };

    if (carsInParking.length > 1) {
        carsInParking.sort((a, b) => a.localeCompare(b));
        console.log(carsInParking.join('\n'));
    }
    else {
        console.log('Parking Lot is Empty');
    };
    
};

solve(
    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

// solve(
//     ['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']
// )
