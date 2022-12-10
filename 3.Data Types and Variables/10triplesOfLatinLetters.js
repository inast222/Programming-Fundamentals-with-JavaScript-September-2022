function solve(n) {
    for(let i = 97; i < 97 + Number(n); i++){
        for(let j = 97; j < 97 + Number(n); j++){
            for(let k = 97; k < 97 + Number(n); k++){
                console.log(`${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}`);
            }
        }
    }
}