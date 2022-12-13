function train(array) {
    let passengersInTrain = array.shift().split(" ").map(Number);
    let maxCapacityWagon = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let currentRow = array[i].split(" ");

        if (currentRow[0] === "Add") {
            let newWagonPassengers = Number(currentRow[1])
            passengersInTrain.push(newWagonPassengers);
        } else {
            for (let j = 0; j < passengersInTrain.length; j++) {
                let passengersInCurrentWagon = passengersInTrain[j];
                if (Number(currentRow[0]) + passengersInCurrentWagon <= maxCapacityWagon) {
                    passengersInTrain[j] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }
    console.log(passengersInTrain.join(" "))
}
train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])