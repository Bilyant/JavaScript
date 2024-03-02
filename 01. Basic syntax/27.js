function solve(speed, area) {
    let limit;
    if (area === 'motorway') {
        limit = 130
    }
    else if (area === 'interstate') {
        limit = 90
    }
    else if (area === 'city') {
        limit = 50
    }
    else if (area === 'residential') {
        limit = 20
    }

    if (speed > limit) {
        let limitDiff = speed - limit
        console.log(`The speed is ${limitDiff} km/h faster than the allowed speed of ${limit} - speeding`)
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
};

solve(40, 'city');
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')
