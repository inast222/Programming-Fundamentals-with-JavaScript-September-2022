function solve(numberOfPages, pagesPerHour, daysToRead) {
    let totalTime = numberOfPages / pagesPerHour;
    let hoursPerDay = totalTime / daysToRead;
    console.log(hoursPerDay)
}
solve(212,
    20,
    2
)