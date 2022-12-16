function wordTracker(input) {

    let searchedWords = input.shift().split(" ");
    let words = {};
    for (const word of searchedWords) {
        words[word] = 0
    }
    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }
    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`)
    }
}
wordTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])