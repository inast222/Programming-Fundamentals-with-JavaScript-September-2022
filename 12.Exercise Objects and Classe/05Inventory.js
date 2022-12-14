function inventory(input) {
    let heros = [];

    for (const element of input) {
        let info = element.split(" / ");
        let hero = info[0];
        let level = info[1];
        let items = info[2];

        let currentHero = {
            name: hero,
            level: level,
            items: items
        }
        heros.push(currentHero);
    }
    heros.sort((a, b) => a.level - b.level);

    for (const hero of heros) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
    }
}
inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'])