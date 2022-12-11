function sumNum(numbers) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i])
    }
    for (let num of numbers) {
        if (num % 2 === 0) {
            sumEven += num
        } else {
            sumOdd += num
        }
    }

    console.log(sumEven - sumOdd)
}
sumNum([1, 2, 3, 4, 5, 6])