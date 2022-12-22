function softUniBar(input) {
    let pattern = /\%(?<customer>[A-Z][a-z]+)\%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/g
    let match = pattern.exec(input);
    let totalPrice = 0;

    while (match !== null) {
        let customer = match.groups.customer;
        let product = match.groups.product;
        let count = match.groups.count;
        let price = match.groups.price;

        let totalPricePerCustomer = Number(count) * Number(price);

        totalPrice += totalPricePerCustomer;

        console.log(`${customer}: ${product} - ${totalPricePerCustomer.toFixed(2)}`);
        
        match = pattern.exec(input);
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`)
}
softUniBar(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])
