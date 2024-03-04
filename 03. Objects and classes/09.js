function solve(array) {
    array.forEach(el => {
        const [name, age] = el.split(' ');
        console.log(`${name}, age ${age} says Meow`);
    });
};  

solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
