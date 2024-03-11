function solve(data) {

    let products = data.shift().split('!');
    let commandParser = {
        'Urgent': urgentProduct,
        'Unnecessary': unnecessaryProduct,
        'Correct': correctProduct,
        'Rearrange': rearrangeProduct,
    }
    
    for (let i = 0; i < data.length; i++) {
        
        let element = data[i];

        if (element == 'Go Shopping!') {
            console.log(products.join(', '));
            break;
        } 

        let line = data[i].split(' ');
        let command = line.shift();

        commandParser[command](line);

    }

    function urgentProduct(line) {
        let product = line[0];
        
        if (!(products.includes(product))) {
            products.unshift(salt);
        }
    };

    function unnecessaryProduct(line) {
        let product = line[1];

        if (products.includes(product)) {
            products.pop(products.indexOf(product));
        }
    };

    function correctProduct(line) {
        let [ oldProduct, newProduct ] = line;

        if (products.includes(oldProduct)) {
            products[products.indexOf(oldProduct)] = newProduct;
        };
    };

    function rearrangeProduct(line) {
        let product = line[0];

        if (products.includes(product)) {
            products.push(product.pop(products.indexOf(product)));
        }
    };

};

solve(
    ["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]
);

console.log('-'.repeat(30));

solve(
    ["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]
);