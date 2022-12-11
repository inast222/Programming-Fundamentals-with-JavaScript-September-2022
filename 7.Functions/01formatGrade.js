function formatGrade(grade) {
    if (grade < 3) {
        console.log("Fail (2)")
    } else if (grade >= 3 && grade < 3.5) {
        console.log(`Poor (${(grade).toFixed(2)})`)
    } else if (grade >= 3.5 && grade < 4.5) {
        console.log(`Good (${(grade).toFixed(2)})`)
    } else if (grade >= 4.5 && grade < 5.5) {
        console.log(`Very good (${(grade).toFixed(2)})`)
    } else if (grade >= 5.5) {
        console.log(`Excellent (${(grade).toFixed(2)})`)
    }
}
formatGrade(3.5)

// · < 3.00 - "Fail"

// · >= 3.00 and < 3.50 - "Poor"

// · >= 3.50 and < 4.50 - "Good"

// · >= 4.50 and < 5.50 - "Very good"

// · >= 5.50 - "Excellent"