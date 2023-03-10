//Exercise 1
function printOdds(count){
    for (let i = 1; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}
printOdds(100);

//Exercise 2
function checkAge(name, age)  {
    let oldEnough = `Congrats ${name}! You can drive!`;
    let tooYoung = `Sorry ${name}, but you need to wait until you're 16.`;

    if(age < 16){
        console.log(tooYoung)
    } else{
        console.log(oldEnough)
    }
}

checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron", 21);

//Exercise 3
function checkQuadrant(x, y){
    if(x > 0 && y > 0){
        return "Quadrant 1";
    } else if (x < 0 && y > 0){
        return "Quadrant 2";
    } else if (x < 0 && y < 0){
        return "Quadrant 3";
    } else if (x > 0 && y < 0){
        return "Quadrant 4";
    } else if (x == 0 && y != 0){
        return "X Axis";
    } else if (x != 0 && y == 0){
        return "Y Axis";
    } else{
        return "Origin";
    }
}

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));

//Exercise 4
function isValidTriangle(a, b, c){
    let isValid = isValidTriangle(a, b, c);
    if (isvalid){
        if(a == b && b == c){
            return `Equilateral`;
        } else if (a == b || b == c || a == c){
            return `Isosceles`;
        } else{
            return `Scalene`;
        }
    } else {
        return `Not a valid triangle.`;
    }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));

//Exercise 5 Bonus
function dataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average daily use: ${projectedAvg} GB/day`);

    if(currentAvg > projectedAvg){
        statusMsg = "EXCEEDING"
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER"
    } else {
        statusMsg = "AT"
    }
    console.log (`You are ${statusMsg} your average daily use (${currentAvg} GB/day), continuing this usage, 
    you'll end up using ${planLimit - projectedUsage} GB from your data limit.`);
}

dataUsageFeedback(20, 12, 22);