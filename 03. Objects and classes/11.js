function solve(employeesNames) {
    let employees = {};

    employeesNames.forEach(empName => {
        employees[empName] = empName.length; 
    });

    for (const emp in employees) {
        console.log(`Name: ${emp} -- Personal Number: ${employees[emp]}`);
    }    
};

solve(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]        
);
