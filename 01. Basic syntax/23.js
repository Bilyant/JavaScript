function solve(...chars) {
    let result = ''
    chars.forEach(ch => result += ch)
    console.log(result);
};

solve('a', 'b', 'c');
solve('%', '2', '0');
solve('1', '5', 'p');
