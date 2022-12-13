function negativeOrPositive(array){
    let numbers=[];

for(let element of array){
    let number=Number(element);

    if(number<0){
        numbers.unshift(number);
    }else {
        numbers.push(number);
    }
}
for(let number of numbers){
    console.log(number)
}

}
negativeOrPositive(['7', '-2', '8', '9'])