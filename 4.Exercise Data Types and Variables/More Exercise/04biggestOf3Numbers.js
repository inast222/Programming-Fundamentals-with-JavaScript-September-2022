function solve(firstNum,secondNum,thirdNum){

    if(firstNum>secondNum && firstNum>thirdNum){
        console.log(firstNum)
        firstNum=Number.MIN_VALUE
    }else if(secondNum>firstNum && secondNum>thirdNum){
        console.log(secondNum)
        secondNum=Number.MIN_VALUE
    }else if(thirdNum>firstNum && thirdNum>secondNum){
        console.log(thirdNum)
        thirdNum=Number.MIN_VALUE
    }else{
        console.log(firstNum)
    }
    
}
solve(-2,
    7,
    3
    )