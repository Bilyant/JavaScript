function solve(data) {
    let schedule = {};

    for (const el of data) {
        const [day, name] = el.split(' ')
        if (day in schedule) {
            console.log(`Conflict on ${day}!`)
        }
        else {
            schedule[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }

    for (const [name, number] of Object.entries(schedule)) {
        console.log(`${name} -> ${number}`)
    }
};

solve(
    ['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);