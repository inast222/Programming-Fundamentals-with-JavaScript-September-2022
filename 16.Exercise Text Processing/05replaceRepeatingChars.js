function replaceRepeatingChars(string) {
    let uniqueChars = '';

    for (let index = 0; index < string.length; index++) {
        let currElement = string[index];
        let nextElement = string[index + 1];

        if (currElement !== nextElement) {
            uniqueChars += currElement;
        }
    }
    console.log(uniqueChars);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')