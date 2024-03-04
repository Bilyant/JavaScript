function solve(bookData) {
    let addressBook = {}

    for (const el of bookData) {
        const [name, address] = el.split(':')
        addressBook[name] = address
    }

    let sortedBook = Object.entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))

    for (const [name, address] of sortedBook) {
        console.log(`${name} -> ${address}`);
    }
};  

solve(
    ['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
