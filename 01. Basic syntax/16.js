function solve(text, word) {
    console.log(
        text
        .split(' ')
        .filter(el => el == word).length)
};

solve('This is a word and it also is a sentence','is');
solve('softuni is great place for learning new programming languages','softuni')