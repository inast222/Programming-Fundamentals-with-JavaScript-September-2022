function meetings(input) {
    let meetings = {};

    for (const entry of input) {
        let [day, name] = entry.split(" ");

        if (meetings[day]) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)