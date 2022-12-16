function piccolo(input) {
    let carParkingList = {};

    for (const line of input) {
        let currentLine = line.split(", ");
        let command = currentLine[0];
        let carNumber = currentLine[1];
        if (command === "IN") {
            carParkingList[carNumber] = carNumber;
        } else {
            delete carParkingList[carNumber];
        }
    }
    let sortedCars = Object.keys(carParkingList).sort((a, b) => a.localeCompare(b));

    if (sortedCars.length === 0) {
        console.log("Parking Lot is Empty.")
    }
    sortedCars.forEach(car => {
        console.log(car)
    });
}
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])