function merge(arr1, arr2) {
    let mergeArr =[];
    for (let i = 0; i < arr1.length; i++) {
        if(i%2===0){
            mergeArr.push(Number(arr1[i])+Number(arr2[i]))
        }else {
            mergeArr.push(`${arr1[i]}${arr2[i]}`)
        }
       
    }
    console.log(mergeArr.join(" - "))
    
}
merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)