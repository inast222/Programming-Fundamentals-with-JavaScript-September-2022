function cardGame(input){

let colors={"C" : 1 , "D" : 2, "H" : 3, "S" : 4};
let powers={"10" : 10, "2" : 2, "3" : 3, "4" : 4, "5" : 5, "6" : 6, "7" : 7, "8" : 8, "9" : 9,
"J" : 11, "Q" : 12, "K" : 13, "A" : 14,};
let players={};

for (let line of input) {
    let[player,cards]=line.split(": ");
    cards =cards.split(", ");
   
    if(!players.hasOwnProperty(player)){
        players[player]=new Set();
    }

    for (let card of cards) {
        players[player].add(card);
    }
}
for (let [player,cards] of Object.entries[players]) {
    let cardsPower=0;

    for (let card of cards) {
        let power=powers[card[0]];
        let color=colors[card.slice(-1)];

        cardsPower+=power*color;
    }
    console.log(`${player}: ${cardsPower}`)
}
}
cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])