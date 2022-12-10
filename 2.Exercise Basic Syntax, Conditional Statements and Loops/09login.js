function login (input) {
 
    let user = input[0];
    let pass = '';
    
    for (let i = user.length - 1; i >= 0; i--){
        pass += user[i];
    }
 
    for (let i = 1; i <= 4; i++) {
 
        if (pass === input[i]) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            if (i === 4) {
                console.log(`User ${user} blocked!`);
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}