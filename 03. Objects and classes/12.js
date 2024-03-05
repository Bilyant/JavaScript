function solve(townsData) {
    let towns = [];

    townsData.forEach(el => {
        const [townName, latitude, longitude] = el.split(' | ');
        let town = { townName, latitude, longitude}
        towns.push(town)
    });

    for (const town of towns) {
        let latitude = Number(town.latitude).toFixed(2)
        let longitude = Number(town.longitude).toFixed(2)
        console.log(
            `{ town: '${town.townName}', latitude: '${latitude}', longitude: '${longitude}' }`
            )
    }
};

solve(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ]
);
