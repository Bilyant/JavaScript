function solve(firstName, familyName, age) {
    let person = {
        firstName,
        familyName,
        age
    }

    for (const el in person) {
        console.log(`${el}: ${person[el]}`)
    }

};

solve("Peter", "Pan", "20");