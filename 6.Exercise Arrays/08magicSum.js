function magicNum(arr, magicNumber) {
    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            let sum = currentEl + nextEl
            if (sum === magicNumber) {
                console.log(`${currentEl} ${nextEl}`)
            }
        }
    }
}
magicNum([1, 7, 6, 2, 19, 23], 8)