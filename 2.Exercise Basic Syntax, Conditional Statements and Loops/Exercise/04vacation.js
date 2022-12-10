function vacation (num, type, day){
    let price = 0
    let total = 0
    let discount = 0
        if(day === "Friday" && type === "Students"){
            price = 8.45;
        }else if (day === "Saturday" && type === "Students"){
            price = 9.80;
        }else if(day === "Sunday" && type === "Students"){
            price = 10.46;
        }
    if(day === "Friday" && type === "Business"){
    price = 10.90;
    }else if(day === "Saturday" && type === "Business"){
        price = 15.60;
    }else if (day === "Sunday" && type === "Business"){
        price = 16;
    }
    if(day === "Friday" && type === "Regular"){
        price = 15;
    }else if (day === "Saturday" && type === "Regular"){
        price = 20;
    }else if (day === "Sunday" && type === "Regular"){
        price = 22.50;
    }
    if(type === "Students" && num >= 30){
        price *= num;
        total = price - (price * 0.15);
        
    }else if (type === "Business" && num >= 100){
        discount = price * 10 
        price *= num;
        total = price - discount
    }else if (type === "Regular" && num >= 10 && num <= 20){
        price *= num;
        total = price - (price * 0.05);
    }else{
        price *= num;
        total += price
    }
    console.log(`Total price: ${(total).toFixed(2)}`);
    }