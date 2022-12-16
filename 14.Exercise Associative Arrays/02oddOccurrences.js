function oddOccurrences(input) {
    let result = {};

    let allWords = input.toLowerCase().split(" ");
    for (const word of allWords) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }
    let sorted = Object.entries(result);
    let resultArray = [];
    for (const [word, occurrences] of sorted) {
        if (occurrences % 2 === 1) {
            resultArray.push(word);
        }
    }
    console.log(resultArray.join(" "))
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')