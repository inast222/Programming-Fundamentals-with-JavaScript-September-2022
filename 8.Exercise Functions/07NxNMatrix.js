function NxNMatrix(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
        let output = '';
        for (let j = 1; j <= number; j++) {
            output += `${number} `
        }
        arr.push(output)
    }
    console.log(arr.join('\n'))
}
NxNMatrix(3)