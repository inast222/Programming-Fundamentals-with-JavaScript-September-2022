function solve(year, month, date) {
    let day30 = [4, 6, 9, 11];
    let monthDays = 0;
    if (month === 2) {
        if (year % 4 === 0) {
            year % 100 !== 0 || year % 400 === 0 ? monthDays = 29 : monthDays = 28;
        }
    } else {
        day30.includes(month) ? monthDays = 30 : monthDays = 31;
    }
    ++date > monthDays ? (date = 1) && month++ : date;
    month === 13 ? (month = 1) && year++ : year;
    console.log(year.toString().length !== 4 ? `${1900 + year}-${month}-${date}` : `${year}-${month}-${date}`);
 
}