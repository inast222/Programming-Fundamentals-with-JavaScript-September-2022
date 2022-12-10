function solve(param){
   const dataType=typeof param;
   
   if(dataType=="string" || dataType=="number"){
    console.log(dataType);
    console.log(param);
   }else{
    console.log(dataType)
    console.log("Parameter is not suitable for printing")
   }
}
solve("Hello, JavaScript!")