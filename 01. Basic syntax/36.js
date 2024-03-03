function solve(word) {
    let result = [];

    for (let i = 0; i < word.length; i++) {
        
        if (word[i].toUpperCase() === word[i]) {
            let currentWord = word[i]

            for (char of word.slice(i + 1, word.length)) {

                if (!(char.toUpperCase() === char)) {
                    currentWord += char;
                    i++;

                    if (i === word.length - 1) {
                        result.push(currentWord);
                    }
                }
                else {
                    result.push(currentWord);
                    break;
                }
            }
        }
    }
    
    console.log(result.join(', '));
};

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');

