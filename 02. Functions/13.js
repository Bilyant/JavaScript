function solve(number) {
    let matrix = [];

    for (let i = 0; i < number; i++) {
        let row = []

        for (let i = 0; i < number; i++) {
            row.push(number)
        }
        matrix.push(row.join(' '))
    }

    console.log(matrix.join('\n'))
};

solve(7);