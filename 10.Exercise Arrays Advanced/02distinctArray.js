function distinctArray(arr) {
    let newArray = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);

        }
    }
    console.log(newArray.join(" "))
}
distinctArray([7, 8, 9, 7, 2, 3,

    4, 1, 2])