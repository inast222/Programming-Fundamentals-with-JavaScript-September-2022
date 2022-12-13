function houseParty(arr) {

    let guestArray = [];
    for (let el of arr) {
        let command = el.split(" ")
        let name = command[0];

        if (command.length === 3) {
            if (guestArray.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                guestArray.push(name)
            }
        } else {
            if (!guestArray.includes(name)) {
                console.log(`${name} is not in the list!`)
            } else {
                let index = guestArray.indexOf(name)
                guestArray.splice(index, 1)
            }
        }
    }
    console.log(guestArray.join("\n"))
}
houseParty(['Allie is going!',

    'George is going!',

    'John is not going!',

    'George is not going!'])