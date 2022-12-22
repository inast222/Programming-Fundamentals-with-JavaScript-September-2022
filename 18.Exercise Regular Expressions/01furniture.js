function furniture(input) {
    let text=input.join(" ");
    let furnitureArray=[];
    let totalSum=0;
    let valid;
    let pattern=/>>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/gm;

    while((valid=pattern.exec(text))!==null){
        let validName=valid.groups['furniture'];
        let validPrice=Number(valid.groups['price']);
        let validQuantity=Number(valid.groups['quantity']);

        furnitureArray.push(validName);
        totalSum+=validPrice*validQuantity;
    }
    console.log('Bought furniture:');

    furnitureArray.forEach(element => {
        console.log(element)
    });

    console.log(`Total money spend: ${totalSum.toFixed(2)}`)

}
furniture(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase'])