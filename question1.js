// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

function triangle(a,b,c){
    if(a===b && b===c){
        console.log('equilateral traiangle');
    }
    else if(a===b || b===c){
        console.log('isosceles traiangle');
    }
    else{
        console.log("scalene triangle")
    }

};

triangle(4,6,8);


 