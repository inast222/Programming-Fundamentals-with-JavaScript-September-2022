function loadingBar(number){
let percentCount='%'.repeat(number/10)
let dotsCount='.'.repeat((100-number)/10)
if(number===100){
    console.log('100% Complete!')
}else if(number<100){
    console.log(`${number}% [${percentCount}${dotsCount}]`)
    console.log('Still loading...')
}

}
loadingBar(50)