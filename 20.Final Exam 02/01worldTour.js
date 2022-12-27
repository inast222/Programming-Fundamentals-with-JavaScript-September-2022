function worldTour(input) {
    let initialString = input.shift();
    let command = input.shift();
    while (command !== "Travel") {
        let [action, firstParam, lastParam] = command.split(":");
        let startIndex;
        let endIndex;
        if (action === "Add Stop") {
            startIndex = Number(firstParam);
            endIndex = Number(lastParam);
            if (startIndex < 0 || startIndex >= initialString.length) {
                console.log(initialString);
                break;
            }
            let value = lastParam;
            let firstPart = initialString.slice(0, startIndex);
            let secondPart = initialString.slice(startIndex);
            initialString = firstPart + value + secondPart;
            console.log(initialString)

        } 
         if (action === "Remove Stop") {
            startIndex = Number(firstParam);
            endIndex = Number(lastParam);
            if (!(initialString[startIndex]) || (!initialString[endIndex])) {
                console.log(initialString);
                break;

            }
            let subStr = initialString.substring(startIndex, endIndex + 1);
            initialString = initialString.replace(subStr, "");
            console.log(initialString);
        } 
         if (action === "Switch") {
            let oldValue = firstParam;
            let newValue = lastParam;

            let pattern = new RegExp(oldValue, "g");
            initialString = initialString.replace(pattern, newValue);
            console.log(initialString);
        }

        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${initialString}`);
}
worldTour(["Hawai::Cyprys-Greece",

    "Add Stop:7:Rome",

    "Remove Stop:11:16",

    "Switch:Hawai:Bulgaria",

    "Travel"])