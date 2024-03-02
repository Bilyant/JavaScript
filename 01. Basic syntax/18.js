function solve(peopleCount, grouptType, dayOfWeek) {
    let singlePrice;
    let totalPrice;
    if (grouptType == 'Students') {
        if (dayOfWeek == 'Friday') {
            singlePrice = 8.45
        }
        else if (dayOfWeek == 'Saturday') {
            singlePrice = 9.80
        }
        else if (dayOfWeek == 'Sunday') {
            singlePrice = 10.46
        }

        if (peopleCount >= 30) {
            singlePrice -= singlePrice * 0.15
        }
    }

    else if (grouptType == 'Business') {
        if (dayOfWeek == 'Friday') {
            singlePrice = 10.90
        }
        else if (dayOfWeek == 'Saturday') {
            singlePrice = 15.60
        }
        else if (dayOfWeek == 'Sunday') {
            singlePrice = 16
        }

        if (peopleCount >= 100) {
            peopleCount -= 10
        }
    }

    else if (grouptType == 'Regular') {
        if (dayOfWeek == 'Friday') {
            singlePrice = 15
        }
        else if (dayOfWeek == 'Saturday') {
            singlePrice = 20
        }
        else if (dayOfWeek == 'Sunday') {
            singlePrice = 22.50
        }

        if (peopleCount >= 10 && peopleCount <= 20) {
            singlePrice -= singlePrice * 0.5
        }
    }

    totalPrice = singlePrice * peopleCount
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
};

solve(
    30,
    "Students",
    "Sunday"
);

solve(
    40,
    "Regular",
    "Saturday"
);
