function storage(input) {
    let storage = new Map();

    for (const line of input) {
        let [item, quatity] = line.split(" ");
        quatity = Number(quatity);

        if (storage.has(item)) {
            quatity += storage.get(item);
        }

        storage.set(item, quatity);

    }

    for (const [item, quantity] of storage) {
        console.log(`${item} -> ${quantity}`)
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)