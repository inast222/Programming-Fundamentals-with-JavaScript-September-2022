function solve(num) {
 
    console.log(`<div class="chessboard">`);
    for (let i = 0; i < num; i++){
        console.log(`  <div>`);
        let color = "";
        for(let j = 0; j < num; j++){
            if (i % 2 === 0){
                j % 2 === 0 ? color = "black" : color = "white";
            }else{
                j % 2 === 1 ? color = "black" : color = "white";
            }
            console.log(`    <span class="${color}"></span>`);
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}