function solve(number) {
    let percents = number / 10;
    let dots = 10 - percents
    
    if (number < 100) {
        let bar = [`${number}% [${'%'.repeat(percents)}${'.'.repeat(dots)}]`];
        console.log(bar.join('') + '\nStill loading...')
    }
    else{
        console.log('100% Complete!')
    }
    
};

solve(50);