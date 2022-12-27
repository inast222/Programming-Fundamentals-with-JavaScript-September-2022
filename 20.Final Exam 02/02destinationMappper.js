function destinationMapper(string) {
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(string);
    let travelPoints = 0;
    let destinations = [];

    while (match !== null) {
        let destination = match.groups.destination;
        destinations.push(destination);
        travelPoints += destination.length;

        match = pattern.exec(string);

    }
    console.log(`Destinations: ${destinations.join(", ")}`)
    console.log(`Travel Points: ${travelPoints}`)
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')