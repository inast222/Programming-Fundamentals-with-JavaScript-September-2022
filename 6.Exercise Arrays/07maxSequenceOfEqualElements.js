function maxSequenceOfEl(arr){
let arr1=[];
let arr2=[];
for(let i = 0;i<arr.length;i++){
    arr2=[];
    for(let j = i;j<arr.length;j++){
    if(arr[i]===arr[j]){
    arr2.push(arr[j])
}else {
    break;
}
if(arr2.length>arr1.length){
    arr1=arr2
}
}
}
console.log(arr1.join(" "))
}
maxSequenceOfEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])