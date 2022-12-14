function storeProvision(available, delivery) {

    let storedProducts = {};

    let availableLength = available.length;

    let deliveryLength = delivery.length;

    for (let index = 0; index < availableLength; index += 2) {
        let currentProduct = available[index];
        storedProducts[currentProduct] = Number(available[index + 1]);
    }

    for (let index = 0; index < deliveryLength; index += 2) {
        let currentProduct = delivery[index];
        if (!storedProducts.hasOwnProperty(currentProduct)) {
            storedProducts[currentProduct] = 0;
        }
        storedProducts[currentProduct] += Number(delivery[index + 1]);
    }
    
    for (const product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`)
    }
}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])