function searchForANumber(arr1, arr2) {
    let numberToTake = arr2[0];
    let numbersToDelete = arr2[1];
    let specialNumber = arr2[2];

    let newArray = arr1.slice(0, numberToTake);
    newArray.splice(0, numbersToDelete)

    let counter = 0;
    for (let number of newArray) {
        if (number === specialNumber) {
            counter++;
        }
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5])