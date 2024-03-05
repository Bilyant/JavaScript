function solve(dataJson) {
    let dictionary = {};
    
    for (let obj of dataJson) {
        let dataParsed = Object.entries(JSON.parse(obj));
        
        for (let el of dataParsed) {
            let term = el[0];
            let definition = el[1];
            dictionary[term] = definition
        }
    }

    let result = Object.entries(dictionary)
        .sort((a, b) => {
            let keyA = a[0];
            let keyB = b[0];
            return keyA.localeCompare(keyB);
        })

    result.forEach(el => {
        console.log(`Term: ${el[0]} => Definition: ${el[1]}`)
    });
};

solve(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]        
);
