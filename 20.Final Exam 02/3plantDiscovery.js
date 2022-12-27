function plantDiscovery(input) {
    let n = input.shift();
    let plants = {};

    for (let i = 0; i < n; i++) {
        let line = input.shift().split('<->');
        let plant = line[0];
        let rarity = Number(line[1]);

        if (plants.hasOwnProperty(plant)) {
            plants[plant].rarity = rarity;
        } else {
            plants[plant] = { rarity, rating: [] };
        }
    }
    while (input[0] !== "Exhibition") {
        let line = input.shift().split(': ');
        let command = line.shift();
        let currentLine = line.shift().split(' - ');
        let plant = currentLine[0];
        let currentNum = currentLine[1];

        if (command === "Rate") {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating.push(currentNum);
            } else {
                console.log('error');
            }
        } else if (command === "Update") {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = currentNum;
            } else {
                console.log('error');
            }
        } else if (command === "Reset") {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating = [];
            } else {
                console.log('error');
            }
        }
    }

    console.log('Plants for the exhibition:');
    for (let plant of Object.entries(plants)) {
        console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${average(plant[1].rating).toFixed(2)}`)
    }
    
    function average(arr) {
        if (arr.length === 0) {
            return 0;
        }
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])


