function adressBook(input) {
    let adressBook = {};

    for (const line of input) {
        let [name, adress] = line.split(":");

        adressBook[name] = adress;

    }
    let adresssBookEntries = Object.entries(adressBook);

    adresssBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const entry of adresssBookEntries) {
        let name = entry[0];
        let adress = entry[1];

        console.log(`${name} -> ${adress}`);
    }
}
adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)