function solve(...chars) {
    let result = []
    for (let i = chars.length - 1; i >= 0; i--) {
        result.push(chars[i])
    }
    console.log(result.join(' '));
};

solve('A', 'B', 'C');
solve('1', 'L', '&');