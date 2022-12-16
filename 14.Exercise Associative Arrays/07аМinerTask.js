function aMinerTask(input) {
    let object = {};

    for (let index = 0; index < input.length; index += 2) {
        let resourse = input[index];
        let quantity = Number(input[index + 1]);

        if (!object.hasOwnProperty(resourse)) {
            object[resourse] = 0;
        }
        object[resourse] += quantity;
    }

    for (const resourse in object) {
        console.log(`${resourse} -> ${object[resourse]}`)
    }
}
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])