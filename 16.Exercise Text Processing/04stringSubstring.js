function stringSubstring(searchedWord, text) {
    let words = text.split(" ");

    for (const word of words) {
        if (word.toLowerCase() === searchedWord.toLowerCase()) {
            console.log(searchedWord);
            return;
        }
    }
    console.log(`${searchedWord} not found!`)
}
stringSubstring('javascript',

    'JavaScript is the best programming language')