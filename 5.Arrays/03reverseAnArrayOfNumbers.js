function reverse(count,numbers){
let arr=[];
for(i=0;i<count;i++){
    arr[count-1-i]=numbers[i]
}
// let output="";
// for(i=arr.length-1;i>=0;i--){
// output=i
// }

console.log(arr.join(" "))
}
reverse(3, [10, 20, 30, 40, 50])