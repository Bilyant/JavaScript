function solve(param1, param2) {
    let words = param1.split(', ')
    let text = param2.split(' ')
    for (const word of words) {
        for (let i = 0; i < text.length; i++) {
            if (text[i].startsWith('*')) {
                if (text[i].length == word.length) {
                    text[i] = word
                }
            }
        }
    }
    console.log(text.join(' '))

};

solve('great',
'softuni is ***** place for learning new programming languages'
);

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)
