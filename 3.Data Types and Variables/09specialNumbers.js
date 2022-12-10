function solve(num) {
 
    for (let i = 1; i <= num; i++){
        let sum = 0;
        for (let j = 0; j < i.toString().length; j++){
            sum += Number(i.toString()[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }  else {
            console.log(`${i} -> False`);
        }
    }
}