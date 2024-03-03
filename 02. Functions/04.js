function solve(product, quantity) {
    let totalPrice;
    let singlePrice;

    if (product === 'coffee') {
        singlePrice = 1.5;
    } 
    else if (product === 'water') {
        singlePrice = 1;
    } 
    else if (product === 'coke') {
        singlePrice = 1.4;
    } 
    else if (product === 'snacks') {
        singlePrice = 2;
    } 

    totalPrice = singlePrice * quantity
    console.log(`${totalPrice.toFixed(2)}`);
};

solve("water", 5);
solve("coffee", 2);
