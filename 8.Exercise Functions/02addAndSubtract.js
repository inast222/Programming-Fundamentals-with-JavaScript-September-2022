function addAndSubtract(firstNum, secondNum, lastNum) {
    function add(a, b) {
        let sumOfTwoNum = a + b;
        return sumOfTwoNum
    }
    let sum = add(firstNum, secondNum)
    function subtract(sumOfTwo, lastNum) {
        return sumOfTwo - lastNum
    }
    let result = subtract(sum, lastNum)
    console.log(result)
}
addAndSubtract(10, 5, 10)