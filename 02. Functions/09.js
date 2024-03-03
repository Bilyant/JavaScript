function solve(firstChar, secondChar) {
    start = firstChar.charCodeAt(0)
    end = secondChar.charCodeAt(0)
    result = []

    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i))
    }

    console.log(result.join(' '));
};

solve('a', 'd');
solve('#', ':');
solve('#', 'C');
