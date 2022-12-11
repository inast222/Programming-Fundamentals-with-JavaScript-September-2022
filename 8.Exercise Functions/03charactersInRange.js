function characterInRange(firstChar, secondChar) {
    let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let rangeEnd = Math.max(secondChar.charCodeAt(), firstChar.charCodeAt());
    let resultString = '';
    for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
        let singleChar = String.fromCharCode(currentChar);
        
        if (currentChar + 1 === rangeEnd) {
            resultString += `${singleChar}`
        } else {
            resultString += `${singleChar} `
        }
    }
    console.log(resultString)
}
characterInRange('#', ':')