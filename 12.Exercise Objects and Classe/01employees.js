function employees(list) {
    let employeesList = {};

    list.forEach(employeeName => {
        employeesList[employeeName] = employeeName.length;
    });
    for (const key in employeesList) {
        console.log(`Name: ${key} -- Personal Number: ${employeesList[key]}`)
    }
}
employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])