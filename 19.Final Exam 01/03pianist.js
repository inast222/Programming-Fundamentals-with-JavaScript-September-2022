function pianist(input) {
    let n = input.shift();
    let album = {};

    for (let i = 0; i < n; i++) {
        let line = input.shift().split('|');
        let piece = line[0];
        let composer = line[1];
        let key = line[2];
        album[piece] = { composer, key };
    }
    while (input[0] !== 'Stop') {
        let line = input.shift().split('|');
        let command = line[0];
        let piece = line[1];

        if (command === 'Add') {
            let composer = line[2];
            let key = line[3];
            if (album.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                album[piece] = { composer, key };
                console.log(`${piece} by ${album[piece].composer} in ${album[piece].key} added to the collection!`);
            }

        } else if (command === 'Remove') {
            if (album.hasOwnProperty(piece)) {
                console.log(`Successfully removed ${piece}!`);
                delete album[piece];
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {
            let newKey = line[2];

            if (album.hasOwnProperty(piece)) {
                album[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }

    for (let piece in album) {
        console.log(`${piece} -> Composer: ${album[piece].composer}, Key: ${album[piece].key}`)
    }
}
pianist([

    '3',

    'Fur Elise|Beethoven|A Minor',

    'Moonlight Sonata|Beethoven|C# Minor',

    'Clair de Lune|Debussy|C# Minor',

    'Add|Sonata No.2|Chopin|B Minor',

    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',

    'Add|Fur Elise|Beethoven|C# Minor',

    'Remove|Clair de Lune',

    'ChangeKey|Moonlight Sonata|C# Major',

    'Stop'

])