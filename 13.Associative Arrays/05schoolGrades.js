function schoolGrades(input) {
    let studentGrades = {};

    for (const element of input) {
        let currentEl = element.split(" ");
        let studentName = currentEl.shift();
        let grades = currentEl.map(Number);

        if (!studentGrades.hasOwnProperty(studentName)) {
            studentGrades[studentName] = [];
        }
        
        let existing = studentGrades[studentName];
        grades.map(x => existing.push(x));
    }

    let sorted = Object.entries(studentGrades);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of sorted) {
        let averageGrade = 0;
        grades.map(x => averageGrade += x);
        averageGrade /= grades.length;
        console.log(`${name}: ${averageGrade.toFixed(2)}`)
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)