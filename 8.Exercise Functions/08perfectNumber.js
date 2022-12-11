function perfectNumber(number) {
    let sumDivisors = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumDivisors += i
        }
    }
    if (number === sumDivisors) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }

}
perfectNumber(1236498)