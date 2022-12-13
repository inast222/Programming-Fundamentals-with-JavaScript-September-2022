function sorting(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let resultArray = [];

    for (let i = 0; i < sortedArray.length; i++) {

        let firstElement = sortedArray.pop();
        let lastElement = sortedArray.shift();
        resultArray.push(firstElement)
        resultArray.push(lastElement)

    }
    let firstElement = sortedArray.pop();
    let lastElement = sortedArray.shift();

    resultArray.push(firstElement)
    resultArray.push(lastElement)

    console.log(resultArray.join(" "))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])