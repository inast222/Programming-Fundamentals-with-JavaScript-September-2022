function resetPassword(input) {
    let rawPassword = input.shift();
    let password = '';

    while (input[0] !== 'Done') {
        let line = input.shift().split(' ');
        let command = line[0];

        if (command === 'TakeOdd') {
            for (let i = 1; i < rawPassword.length; i+=2) {
               
                    password += rawPassword[i];
                
            }
            console.log(password);

        } else if (command === 'Cut') {
            let index = Number(line[1]);
            let length = Number(line[2]);
            let start = password.substring(0, index);
            let end = password.substring(index + length);
            password = start + end;

            console.log(password);

        } else if (command === 'Substitute') {
            let substring = line[1];
            let substitute = line[2];

            if (password.includes(substring)) {
                password = password.split(substring).join(substitute);
                console.log(password);

            } else {
                console.log("Nothing to replace!");
            }
        }
    }
    console.log(`Your password is: ${password}`);
}
resetPassword(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
