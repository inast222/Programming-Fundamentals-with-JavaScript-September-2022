function adAstra(string) {
    let pattern = /([#|\|])(?<item>[\sA-Za-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;

    let match = pattern.exec(string);
    let totalCalories = 0;
    let output = [];

    while (match !== null) {
        let item = match.groups.item;
        let date = match.groups.date;
        let calories = Number(match.groups.calories)

        output.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);

        totalCalories += Number(match.groups.calories);

        match = pattern.exec(string);
        
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

    console.log(output.join("\n"));
}
adAstra('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|')