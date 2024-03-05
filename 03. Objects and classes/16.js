function solve(data) {
    let words = data.shift().split(' ')

    for (const word of words) {
        let count = 0;
        data.map(w => {
            if (w == word) {
                count++;
            };
        });
        console.log(`${word} - ${count}`);
    };
};

solve(
    [
        'this sentence',

        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the',
        'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence',
        'because', 'this', 'is', 'your', 'task'
    ]
);