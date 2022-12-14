function convertToJson(firstName, lastName, hairColor) {
    let object = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    let json = JSON.stringify(object);
    console.log(json)
}
convertToJson('George', 'Jones', 'Brown')