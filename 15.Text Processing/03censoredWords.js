function censoredWord(text, word) {
    while (text.indexOf(word) >= 0) {
        text = text.replace(word, "*".repeat(word.length))
    }
    console.log(text)

}
censoredWord('A small sentence with some words',

    'small')