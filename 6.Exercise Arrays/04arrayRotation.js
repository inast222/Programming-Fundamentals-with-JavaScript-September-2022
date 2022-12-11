function arrRotations(arr,rotations){
    for(let i=0;i<rotations;i++){
        let currentNum=arr.shift()
        arr.push(currentNum)
    }
    console.log(arr.join(" "))
}
arrRotations