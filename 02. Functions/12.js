function solve(password) {
    let isValid = true
    let errors = []
    let digitsCount = 0

    if (password.length < 6 || password.length > 10) {
        isValid = false
        errors.push('Password must be between 6 and 10 characters')
    }

    for (const char of password) {

        if (!(char.match(/[a-z]/i) || (/^\d+$/.test(char))))  {
            isValid = false
            errors.push('Password must consist only of letters and digits')
            break
        }
    }

    for (const char of password) {
        
        if (/^\d+$/.test(char)) {
            digitsCount++
        }
    }

    if (digitsCount < 2) {
        isValid = false
        errors.push('Password must have at least 2 digits')
    }

    if (!isValid) {
        console.log(errors.join('\n'))
    }
    else {
        console.log('Password is valid')
    }

};

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');
