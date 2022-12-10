function thePyramidOfKingDjoser (basis, increment) {
 
    let step = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
 
    for (let i = basis; i > 0; i -= 2) {
        let size = i * i;
        step++;
        if (i < 3) {
            gold = size * increment;
        } else {
            stone += (i - 2) * (i - 2) * increment;
            let decorate = (i * 4 - 4) * increment;
            if (step % 5 !== 0) {
                marble += decorate;
            } else {
                lapis += decorate;
            }
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}