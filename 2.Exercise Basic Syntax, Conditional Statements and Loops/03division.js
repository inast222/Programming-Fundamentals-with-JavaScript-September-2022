function solve(num) {
    let devisor = 0;
    if (num % 10 === 0) {
        devisor = 10;
    } else if (num % 7 === 0) {
        devisor = 7;
    } else if (num % 6 === 0) {
        devisor = 6;
    } else if (num % 3 === 0) {
        devisor = 3;
    } else if (num % 2 === 0) {
        devisor = 2;
    } else {
        console.log("Not divisible")
    }
    if (devisor !== 0) {
        console.log(`The number is divisible by ${devisor}`);
    }
}