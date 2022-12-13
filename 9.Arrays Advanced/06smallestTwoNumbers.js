function smallestTwoNums(array){
let sortedArr=array.sort((a,b)=>{
return a-b
})

console.log(sortedArr.slice(0,2))
}
smallestTwoNums([30, 15, 50, 5])