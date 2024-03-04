function solve(obj) {
    
    for (el in obj) {
        console.log(`${el} -> ${obj[el]}`)
    }
};

solve(
    {
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
);