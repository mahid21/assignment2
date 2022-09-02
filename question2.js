let marks=70;

switch(marks){
    case marks>=90 && marks <=100:
        console.log("grade S");
        break;
    case marks>=80 && marks <=90:
        console.log("grade A");
        break;
    case marks>=70 && marks <=80:
        console.log("grade B");
        break;
    case marks>=60 && marks <=70:
        console.log("grade C");
        break;
    case marks>=50 && marks <=60:
        console.log("grade D");
        break;
    case marks>=40 && marks <=50:
        console.log("grade E");
        break;
    case marks=0 && marks <=40:
        console.log("Failed");
        break;
        default:
            console.log("Invalid Marks")
}