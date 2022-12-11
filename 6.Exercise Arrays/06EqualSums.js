function solve(arr){
let equalSum=false;
for(let i =0;i<arr.length;i++){
    let leftSum=0;
    let rigthSum=0;
    for(let j=i-1;j>=0;j--){
        leftSum+=arr[j]
    }
    for(let a=i+1;a<arr.length;a++){
        rigthSum+=arr[a]
    }
    if(leftSum===rigthSum){
        console.log(i)
        equalSum=true;
    }
}
if(!equalSum){
    console.log("no")
}
}
solve([1, 2, 3, 3])