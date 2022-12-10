function solve(firstNum, secondNum, thirdNum) {
    for(let i=0;i<3;i++){
        if(firstNum>secondNum && firstNum>thirdNum){
            console.log(firstNum);
            firstNum=Number.MIN_VALUE
        }else if (secondNum>firstNum && secondNum>thirdNum){
            console.log(secondNum);
            secondNum=Number.MIN_VALUE
        }else {
            console.log(thirdNum)
            thirdNum=Number.MIN_VALUE
        }
    }
}
solve(2,1,3)