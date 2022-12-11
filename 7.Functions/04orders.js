function orders(product, amount) {
    let price = 0;
    if (product === "coffee") {
        price = 1.5;
    } else if (product === "water") {
        price = 1;
    } else if (product === "coke") {
        price = 1.4;
    } else if (product === "snacks") {
        price = 2;
    }
    let totalPrice = price * amount
    console.log(totalPrice.toFixed(2))
}
orders("water", 5)