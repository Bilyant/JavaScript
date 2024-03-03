function solve(word, text) {
    text = text.split(' ')  
    let wordLowerCase = '';
    let result = []
    let isFound = false

    for (const char of word) {
        wordLowerCase += char.toLowerCase()
    }
    
    for (const word of text) {
        let currentWord = '';

        for (char of word) {
            currentWord += char.toLowerCase()
        }

        if (currentWord === wordLowerCase) {
            isFound = true
            result.push(currentWord)
        }
    }

    if (isFound) {
        console.log(result.join('\n'))
    }
    else {
        console.log(`${word} not found!`)
    }
};

solve(
    'javascript',
    'JavaScript is the best programming language)',
);

solve(
    'python',
    'JavaScript is the best programming language'
);
