function pirates(input) {
    let cities = {};
    while (input[0] !== 'Sail') {
        let line = input.shift().split('||');
        let city = line[0];
        let population = Number(line[1]);
        let gold = Number(line[2]);

        if (cities.hasOwnProperty(city)) {
            cities[city].population += population;
            cities[city].gold += gold;
        } else {
            cities[city] = { population, gold };
        }
    }
    while (input[0] !== 'End') {
        let line = input.shift().split('=>');
        let command = line[0];
        let city = line[1];

        if (command === 'Plunder') {
            let population = Number(line[2]);
            let gold = Number(line[3]);
            cities[city].population -= population;
            cities[city].gold -= gold;

            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);

            if (cities[city].population <= 0 || cities[city].gold <= 0) {

                console.log(`${city} has been wiped off the map!`);
                delete cities[city];
            }

        } else if (command === 'Prosper') {
            let gold = Number(line[2]);

            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[city].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);
            }
        }
    }
    let count = Object.keys(cities).length;
    
    if (count !== 0) {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
        for (let city in cities) {
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])