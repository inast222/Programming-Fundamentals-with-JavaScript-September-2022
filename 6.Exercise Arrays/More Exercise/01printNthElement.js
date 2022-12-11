function printNthNum(arr){
let step=Number(arr[arr.length-1])
let newArray=[];

for(let i=0;i<arr.length-1;i+=step){
    newArray.push(arr[i]);
    
}
console.log(newArray.join(" "))
}
printNthNum(['5', '20', '31', '4', '20', '2'])