function processOddNumbers(array) {
    let newArray = [];
    for (let i = array.length - 1; i > 0; i--) {
        if (i % 2 !== 0) {
            array[i] = array[i] * 2
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}
processOddNumbers([3, 0, 10, 4, 7, 3])




function processOddNumbers(array){
let result=array.filter((x,i)=>i%2!==0)
.map(x=>x*2)
.reverse();

console.log(result)
}

processOddNumbers([3, 0, 10, 4, 7, 3])