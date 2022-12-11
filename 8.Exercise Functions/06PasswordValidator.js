function passwordValidator(password) {
    let digitsCounter = 0;
    let passwordLength = password.length;
    isSymbol = false;
    for (let i = 0; i < passwordLength; i++) {
        let charNum = password[i].charCodeAt();

        isDigit = charNum >= 48 && charNum <= 57;
        isSmallLetter = charNum >= 97 && charNum <= 122;
        isCapitalLetter = charNum >= 65 && charNum <= 90;

        if (isDigit) {
            digitsCounter++;
        }

        if (!isDigit && !isSmallLetter && !isCapitalLetter) {
            isSymbol = true;

        }
    }
    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters')
    }
    if (isSymbol) {
        console.log('Password must consist only of letters and digits')
    }
    if (digitsCounter < 2) {
        console.log('Password must have at least 2 digits')
    }
    if (!isSymbol && digitsCounter >= 2 && (password.length >= 6 || password.length <= 10))
        console.log('Password is valid')
}

passwordValidator('logIn')