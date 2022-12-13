function firstLastK(input){
    let count=input.shift();
    let firstElemnts=input.slice(0,count);
    let lastElements=input.slice(input.length-count);
    
    console.log(firstElemnts.join(" "));
    console.log(lastElements.join(" "));
}
firstLastK([2,

    7, 8, 9])