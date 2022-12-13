function arrayManipulation(arrayNums, arrayCommands) {
    while (arrayCommands.length !== 0) {
        let command = arrayCommands.shift().split(" ");
        if (command[0] === "add") {
            arrayNums.splice(Number(command[1]), 0, Number(command[2]));
        }
        if (command[0] === "addMany") {
            let input = command.slice(1).map(Number);
            let index = input.shift();
            for (let i = index; i < input.length + index; i++) {
                arrayNums.splice(i, 0, input[i - index]);
            }
            console.log(arrayNums)
        }
        if (command[0] === "contains") {
            arrayNums.indexOf(Number(command[1]));
        }
        if (command[0] === "remove") {
            arrayNums.splice(Number(command[1]), 1);
        }
        if (command[0] === "shift") {
            for (let i = 0; i < Number(command[1]); i++) {
                arrayNums.push(arrayNums.shift());
            }
        }
        if (command[0] === "sumPairs") {
            let x = Math.floor(arrayNums.length / 2);
            for (let i = 0; i < x; i++) {
                arrayNums[i] += arrayNums[i + 1];
                arrayNums.splice(i + 1, 1);
            }
        }
        if (command[0] === "print") {
            console.log(`[ ${arrayNums.join(', ')} ]`);

        }
    }
}
arrayManipulation([1, 2, 3, 4, 5],

    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',

        'shift 1', 'print'])