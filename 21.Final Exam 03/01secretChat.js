function secretMsg(input) {
    let secretMsg = input.shift();
    while (input[0] !== 'Reveal') {
        let line = input.shift().split(':|:');
        let command = line[0];
        if (command === 'ChangeAll') {
            let oldLetters = line[1];
            let newLetters = line[2];
            secretMsg = secretMsg.split(oldLetters).join(newLetters);
            console.log(secretMsg)
        } else if (command === 'Reverse') {
            let substring = line[1];

            if (!secretMsg.includes(substring)) {
                console.log('error');

            } else {
                let index = secretMsg.indexOf(substring);
                let firstPart = secretMsg.substring(0, index);
                let secondPart = secretMsg.substring(index + substring.length);
                secretMsg = firstPart + secondPart + substring.split('').reverse().join('');
                console.log(secretMsg)
            }
        } else if (command === 'InsertSpace') {
            let index = line[1];
            let firstHalf = secretMsg.substring(0, index);
            let secondHalf = secretMsg.substring(index);
            secretMsg = firstHalf + ' ' + secondHalf;
            console.log(secretMsg);
        }
    }
    console.log(`You have a new text message: ${secretMsg}`)
    
}
secretMsg([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])