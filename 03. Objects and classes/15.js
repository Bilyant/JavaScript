function solve(heroesData) {
    let heroes = []

    for (const line of heroesData) {
        let [name, level, items] = line.split(' / ');
        let hero = {
            'Hero': name,
            'level': level,
            'items':  items
        };
        heroes.push(hero);
    };

    heroes.sort((a, b) => a.level - b.level);

    for (const heroObj of heroes) {
        let heroData = [
            `Hero: ${heroObj.Hero}`,
            `level => ${heroObj.level}`, 
            `items => ${heroObj.items}`
        ]
        console.log(heroData.join('\n'))
    }
};

solve(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]        
);

// solve(
//     [
//         'Batman / 2 / Banana, Gun',
//         'Superman / 18 / Sword',
//         'Poppy / 28 / Sentinel, Antara'
//     ]    
// )
