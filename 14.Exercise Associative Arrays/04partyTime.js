function partyTime(input) {
    let vipList = [];
    let regularList = [];

    let currentElement = input.shift();
    while (currentElement !== "PARTY") {
        let isVip = !isNaN(currentElement[0]);

        if (isVip) {
            vipList.push(currentElement);
        } else {
            regularList.push(currentElement);
        }
        currentElement = input.shift();

    }

    let guestList = vipList.concat(regularList);

    for (const guest of input) {
        guestList.splice(guestList.indexOf(guest), 1);
    }

    console.log(guestList.length);
    guestList.forEach(guest => {
        console.log(guest)
    });

}
partyTime(['7IK9Yo0h',

    '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])