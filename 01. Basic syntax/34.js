function solve(text) {
    let data = text.split(' ')
    let specialWords = ['#123']
    let result = []

    for (const word of data) {
        if (word.startsWith('#') && word.length > 1) {
            specialWords.push(word.slice(1, word.length))
        }
    }

    for (const word of specialWords) {
        let isSpecial = true

        for (const char of word) {
            if (!(/^[a-z]$/i.test(char) )) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            result.push(word)
        }
    }

    console.log(result.join('\n'));

};

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
