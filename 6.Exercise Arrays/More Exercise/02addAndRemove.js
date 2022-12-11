function solve(arr) {
    let addArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            addArray.push(i + 1)
        } else if (arr[i] === "remove") {
            addArray.pop()
        }
    }
    if (addArray.length > 0) {
        console.log(addArray.join(" "))

    } else {
        console.log("Empty")
    }
}
solve([['remove', 'remove', 'remove']])
