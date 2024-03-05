function solve(currentStock, deliveryStock) {
    let inventory = {};
    let allStock = [...currentStock, ...deliveryStock]
    
    for (let i = 0; i < allStock.length; i+=2) {
        let product = allStock[i]
        let quantity = Number(allStock[i+1]) 
        if (!(product in inventory)) {
            inventory[product] = quantity;
        }
        else {
            inventory[product] += quantity;
        };
    }

    for (const [product, quantity] of Object.entries(inventory)) {
        console.log(`${product} -> ${quantity}`);
    }
    
};

solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],

    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]    
);
