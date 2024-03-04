function solve(data) {
    let obj = {};
    
    for (const el of data) {
        const [name, number] = el.split(' ')
        obj[name] = number
    }

    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
};  

solve(
    ['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);