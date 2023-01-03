function activationKey(input) {
    let activationKey = input.shift();

    let line = input.shift();

    while (line !== 'Generate') {
        let currentLine = line.split('>>>');
        let command = currentLine[0];

        if (command === 'Contains') {
            let substring = currentLine[1];
            if (!activationKey.includes(substring)) {
                console.log("Substring not found!")
            } else {
                console.log(`${activationKey} contains ${substring}`)
            }
        } else if (command === 'Flip') {
            let upperOrLower = currentLine[1];
            let startIndex = Number(currentLine[2]);
            let endIndex = Number(currentLine[3]);
            let firstPart = activationKey.substring(0, startIndex);
            let middlePart = activationKey.substring(startIndex, endIndex);
            let lastPart = activationKey.substring(endIndex);

            if (upperOrLower === 'Upper') {
                middlePart = middlePart.toLocaleUpperCase();
            } else {
                middlePart = middlePart.toLocaleLowerCase();
            }
            activationKey = firstPart + middlePart + lastPart;
            console.log(activationKey)
        } else if (command === "Slice") {
            let startIndex = currentLine[1];
            let endIndex = currentLine[2];
            let substring = activationKey.substring(startIndex, endIndex);
            activationKey = activationKey.replace(substring, '');
            console.log(activationKey)
        }

        line = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`)
}
activationKey(["abcdefghijklmnopqrstuvwxyz",

    "Slice>>>2>>>6",

    "Flip>>>Upper>>>3>>>14",

    "Flip>>>Lower>>>5>>>7",

    "Contains>>>def",

    "Contains>>>deF",

    "Generate"])