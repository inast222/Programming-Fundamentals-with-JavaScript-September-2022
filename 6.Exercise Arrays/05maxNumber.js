function maxNum(arr){
let topIntegerArr=[];
for(let i = 0;i<arr.length;i++){
    let currentEl=arr[i];
    let isTopInteger=true;
    for(let j =i+1;j<arr.length;j++){
        let nextEl=arr[j];
        if(currentEl<=nextEl){
            isTopInteger=false;
            break;
        }
    }
    if(isTopInteger){
        topIntegerArr.push(currentEl)
    }
}
console.log(topIntegerArr.join(" "))
}
maxNum([14, 24, 3, 19, 15, 17])