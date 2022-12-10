function solve(spices) {
    let sum = 0;
    let days = 0;
    while (spices >= 100) {
        sum += spices - 26
        days++
        spices-=10
    }
    if(sum>0){
        console.log(days)
        console.log(sum-26)
    }else {
        console.log(days)
        console.log(sum)
    }
   

}