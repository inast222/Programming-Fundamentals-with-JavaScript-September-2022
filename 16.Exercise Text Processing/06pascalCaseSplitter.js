function pascalCaseSplitter(string) {
    let splitedWords = [];
    let currentWord = string[0];

    for (let index = 1; index < string.length; index++) {
        let currentChar = string[index];

        if (currentChar.toLocaleLowerCase() === currentChar) {
            currentWord += currentChar;
        } else {
            splitedWords.push(currentWord)
            currentWord = currentChar;
        }
    }
    splitedWords.push(currentWord);
    console.log(splitedWords.join(", "))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')