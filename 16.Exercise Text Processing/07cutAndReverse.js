function cutAndReverse(input) {
    let reversed = input.split('').reverse().join('');

    let splitOne = reversed.substring(reversed.length / 2);
    let splitTwo = reversed.substring(0, reversed.length / 2);
    console.log(splitOne)
    console.log(splitTwo)
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')