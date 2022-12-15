function wordOccurrences(array) {
    let words = {};
    for (const word of array) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    }
    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const [word, occurrences] of sorted) {
        console.log(`${word} -> ${occurrences} times`)
    }

}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"])