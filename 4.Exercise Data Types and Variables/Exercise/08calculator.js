function solve(number1,operator,number2){
    let sum=0;
    if(operator==="+"){
       sum=number1+number2
       console.log(sum.toFixed(2))
    }else if(operator==="-"){
       sum=number1-number2
       console.log(sum.toFixed(2))
    }else if(operator==="*"){
       sum=number1*number2
       console.log(sum.toFixed(2))
    }else if(operator==="/"){
       sum=number1/number2
       console.log(sum.toFixed(2))
    }
   
   }