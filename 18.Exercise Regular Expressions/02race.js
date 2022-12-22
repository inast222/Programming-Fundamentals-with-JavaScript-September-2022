function race(input) {
    let participants = input.shift().split(", ");
    let racers = {};

    for (let line of input) {

        if (line !== "end of race") {

            let racerName = line.match(/[a-z]+/gi).join("");
            let distanceInDigits = line.match(/\d/g);
            let distance = 0;

            for (let digit of distanceInDigits) {
                distance += Number(digit);
            }
            if (participants.includes(racerName)) {
                if (racers.hasOwnProperty(racerName)) {
                    racers[racerName] += distance;
                } else {
                    racers[racerName] = distance;
                }
            }
        }
    }

    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

    console.log(`1st place: ${sorted[0]}`)
    console.log(`2nd place: ${sorted[1]}`)
    console.log(`3rd place: ${sorted[2]}`)

}
race(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race'])