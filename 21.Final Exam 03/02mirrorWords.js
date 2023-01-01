function mirrorWords(text) {
    let pattern = /([@|#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(text);
    let count = 0;
    let validPairs = [];
    while (match !== null) {
        count++;

        let wordOne = match.groups.wordOne;
        let wordTwo = match.groups.wordTwo;
        let reversed = wordTwo.split('').reverse().join('');

        if (wordOne === reversed) {
            validPairs.push(`${wordOne} <=> ${wordTwo}`);
        }
        match = pattern.exec(text);
    }
    if (count === 0) {
        console.log('No word pairs found!')
    } else {
        console.log(`${count} word pairs found!`)
    }
    if (validPairs.length === 0) {
        console.log('No mirror words!')
    } else {
        console.log("The mirror words are:");
        console.log(validPairs.join(', '))
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])