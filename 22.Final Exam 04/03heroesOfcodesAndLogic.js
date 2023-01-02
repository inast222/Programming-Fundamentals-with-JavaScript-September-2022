function codesAndLogic(input) {
    let n = input.shift();
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let line = input.shift().split(' ');
        let hero = line[0];
        let hp = Number(line[1]);
        let mp = Number(line[2]);
        heroes[hero] = { hp, mp };
    }
    while (input[0] !== 'End') {
        let line = input.shift().split(' - ');
        let command = line[0];
        let hero = line[1];

        if (command === 'CastSpell') {
            let mpNeeded = Number(line[2]);
            let spellName = line[3];

            if (heroes[hero].mp >= mpNeeded) {
                heroes[hero].mp -= mpNeeded;
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`)
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`)
            }

        } else if (command === 'TakeDamage') {
            let damage = Number(line[2]);
            let attacker = line[3];
            heroes[hero].hp -= damage;

            if (heroes[hero].hp > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`)
            } else {
                console.log(`${hero} has been killed by ${attacker}!`);
                delete heroes[hero];
            }

        } else if (command === 'Recharge') {
            let amount = Number(line[2]);
            let currentMp=heroes[hero].mp;
            if (heroes[hero].mp +amount<=200) {
                heroes[hero].mp += amount;
                
                console.log(`${hero} recharged for ${amount} MP!`);
            }else{
                heroes[hero].mp=200;
                console.log(`${hero} recharged for ${200 -currentMp } MP!`)
            }
           

        } else if (command === 'Heal') {
            let amount = Number(line[2]);
            let currentHP=heroes[hero].hp;
            if (heroes[hero].hp+amount <= 100) {
                heroes[hero].hp += amount;
                console.log(`${hero} healed for ${amount} HP!`); 
            }else {
                heroes[hero].hp=100;
                console.log(`${hero} healed for ${100 - currentHP} HP!`);
            }     
        }
    }
    for (let hero in heroes) {
        console.log(hero);
        console.log(`  HP: ${heroes[hero].hp}`);
        console.log(`  MP: ${heroes[hero].mp}`);
    }
}
codesAndLogic([
     '4',
     'Adela 90 150',
     'SirMullich 70 40',
     'Ivor 1 111',
     'Tyris 94 61',
     'Heal - SirMullich - 50',
     'Recharge - Adela - 100',
     'CastSpell - Tyris - 1000 - Fireball',
     'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
     'End'])