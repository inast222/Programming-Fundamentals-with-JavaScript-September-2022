function solve(num) {
    let result = "";
    if (num % 10 === 1) {
        result = "one"
    } else if (num % 10 === 2) {
        result = "two"
    } else if (num % 10 === 3) {
        result = "three"
    } else if (num % 10 === 4) {
        result = "four"
    } else if (num % 10 === 5) {
        result = "five"
    } else if (num % 10 === 6) {
        result = "six"
    } else if (num % 10 === 7) {
        result = "seven"
    } else if (num % 10 === 8) {
        result = "eight"
    } else if (num % 10 === 9) {
        result = "nine"
    } else if (num % 10 === 0) {
        result = "zero"
    }
    console.log(result)
}
solve(1643)