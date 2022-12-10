function solve(day,age){
    let price=0;
    if(day==="Weekday"){
      if(0<=age && age <=18){
        price=12;
      }else if(age<=64){
        price=18;
      }else if(age<=122){
        price=12;
      }
    }else if(day==="Weekend"){
        if(0<=age && age<=18){
            price=15;
          }else if(age<=64){
            price=20;
          }else if(age<=122){
            price=15;
          }
    }else if (day==="Holiday"){
        if(0<=age && age<=18){
            price=5;
          }else if(age<=64){
            price=12;
          }else if(age<=122){
            price=10;
          }
    }
    if(0<=age&& age<=122){
        console.log(`${price}$`)
    }else {
        console.log("Error!")
    }
}