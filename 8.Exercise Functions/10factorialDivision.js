function solve(firstNumber,secondNumber){

    function calculateFactorial(){
        let num1=1;
        let num2=1;
        for(let i =firstNumber;i>0;i--){
            num1*=i;
        }
        for(let j=secondNumber;j>0;j--){
            num2*=j;
        }
        return `${(num1/num2).toFixed(2)}`;
    }
    console.log(calculateFactorial())
}
solve(6,2)