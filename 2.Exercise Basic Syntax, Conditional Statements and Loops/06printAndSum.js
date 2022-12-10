function solve(n1,n2){
    let sequense="";
    let sum=0;

    for(let i=n1;i<=n2;i++){
        sequense+=i+" ";
        sum+=i
    }
    console.log(sequense);
    console.log(`Sum: ${sum}`);
}