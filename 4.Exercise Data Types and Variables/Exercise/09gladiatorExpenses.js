function solve(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let totalPrice=(Math.floor(lostFights/2))*helmetPrice+(Math.floor(lostFights/3))*swordPrice+(Math.floor(lostFights/6))*shieldPrice+(Math.floor(lostFights/12))*armorPrice

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)
}