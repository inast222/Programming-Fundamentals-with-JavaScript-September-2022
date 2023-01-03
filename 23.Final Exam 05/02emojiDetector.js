function emojiDeterector(input) {
     input=input.shift();
    let emojiPattern=/(:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g;
    let digitPattern=/\d/g; 
    let coolTreshold=1;
    let matchNumber=digitPattern.exec(input);
    let matchEmoji=emojiPattern.exec(input);
    let emojiCouter=0;
    let emojis=[];

    while(matchNumber!==null){
        coolTreshold*=Number(matchNumber[0]);
        matchNumber=digitPattern.exec(input);
    }

    while(matchEmoji!==null){
        emojiCouter++;
        let sumLetters=0;
        let word=matchEmoji.groups.word;

        for (let letter of word) {
            sumLetters+=letter.charCodeAt();    
        }
        if(sumLetters>coolTreshold){
            emojis.push(matchEmoji[0]);
        }
        matchEmoji=emojiPattern.exec(input);
    }
    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${emojiCouter} emojis found in the text. The cool ones are:`);  
    console.log(emojis.join("\n"));               
}
emojiDeterector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])