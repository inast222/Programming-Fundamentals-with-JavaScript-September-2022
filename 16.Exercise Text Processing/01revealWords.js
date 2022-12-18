function revealWords(words, text) {
    let wordsToReveal = words.split(', ');
    let sentenceArr = text.split(' ');
  
    for (let word of wordsToReveal) {
        for (let element of sentenceArr) {
            if (element.includes('*') && word.length === element.length) {
                text = text.replace(element, word);
            }
        }
    }
    console.log(text)
}
revealWords('great',' learning softuni is ***** place for ******** new programming languages')
 