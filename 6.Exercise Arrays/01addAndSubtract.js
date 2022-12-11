function addAndSubtract(arr){
let myArr=arr;
let arrSum=0;
let myArrSum=0;

for(let index=0;index<myArr.length;index++){
    arrSum+=myArr[index];
    if(myArr[index]%2===0){
        myArr[index]+=index;
    }else{
        myArr[index]-=index;
    }
    myArrSum+=myArr[index]
}
console.log(myArr)
console.log(arrSum)
console.log(myArrSum)

}
addAndSubtract([5, 15, 23, 56, 35])