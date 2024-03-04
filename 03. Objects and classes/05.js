function solve(firstName, lastName, hairColor) {
    let person = { firstName,lastName, hairColor };
    let personJson = JSON.stringify(person);
    console.log(personJson);
};  

solve('George', 'Jones', 'Brown');
solve('Peter', 'Smith', 'Blond');