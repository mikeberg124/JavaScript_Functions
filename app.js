console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count) {
    if (count < 0) {
        count = count * -1;
    }
    for(i = 0; i <= count ; i++) {
        if(i % 2 != 0)
        console.log(i);

    }


}
//printOdds(-10);
//printOdds(10);


// Exercise 2 Section
function ageCheck(){
let userName = prompt("what is your name?");
let age = prompt("What is your age?")
let aboveSixteen ='You can drive';
let belowSixteen =`Sorry, ${userName} but you need to wait until 16`;
if(age >= 16) {
    console.log(aboveSixteen);
}else{
    console.log(belowSixteen);
}
}
//ageCheck()


//Exercise 3 Section
function whichQuadrant(x,y){
if(x>0 && y>0){
    console.log(`${x},${y} is in Quadrant 1`);  
}else if(x<0 && y>0) {
    console.log(`${x},${y} is in Quadrant 2`);
}else if(x<0 && y<0) {
    console.log(`${x},${y} is in Quadrant 3`);
}else if(x>0 && y<0) {
    console.log(`${x},${y} is in Quadrant 4`);
}else if(x!=0 && y==0) {
    console.log(`${x},${y} is on the x axis`);
}else if(x==0 && y!=0) {
    console.log(`${x},${y} is on the y axis`);
}else (x==0 && y==0) 
    console.log(`${x},${y} is on the origin`);
}


//whichQuadrant(10,8);

// Exercise 4 Section
function typeOfTriangle(side1, side2, side3){
   let isValid = false;  
   if(side1 +side2 > side3 && side2 +side3 > side1 && side1 + side3 > side2){
    isValid = true;
   } 
   if(isValid){
    if(side1 == side2 && side2 == side3) {
        console.log(`sides ${side1}, ${side3} form an equilateral triangle`);
    }else if(side1 == side2 || side2 == side3){
        console.log(`sides ${side1}, ${side3} form an isosceles triangle`);  
    }else {
        console.log(`sides ${side1}, ${side3} form a scalene triangle`);   
    }
   }
   if(isValid == false){
    console.log("sorry not a triangle");
   }
}
//typeOfTriangle(3,3,3)

// Exercise 5 Section
function dataPlan(planLimit, day, usage){
let daysLeftOnPlan = 30 - day;
let averageDailyUse =usage/day;
let suggestedAverageUse = planLimit/30;
let dataLeft =planLimit - usage;
let projectedUsage = Math.abs(planLimit-(averageDailyUse*30));
let suggestedUse = dataLeft /daysLeftOnPlan;

if(averageDailyUse > suggestedAverageUse){
console.log(`${day} day(s) used, ${daysLeftOnPlan} day(s) remaining
What are you using: ${averageDailyUse.toFixed(2)} GB/day.
You are EXCEEEDING your average daily use/
what you should use ${suggestedAverageUse.toFixed(2)} GB/day,
continuing this data usage rate will exceed your data plan by 
 ${projectedUsage.toFixed(2)} GB. to stay below your data plan 
 use no more than ${suggestedAverageUse.toFixed(2)} GB/day.`);

}else if(averageDailyUse < suggestedAverageUse) {
    console.log(`${day} day(s) used, ${daysLeftOnPlan} day(s) remaining
    Average daily use: ${averageDailyUse.toFixed(2)},
    You are UNDER your daily use ${averageDailyUse.toFixed(2)} GB/day. 
   continuing this usage, you'll be under your data plan by 
   ${projectedUsage.toFixed(2)} GB.`);
}else{
    console.log(`Your average daily use is ${averageDailyUse.toFixed(2)} GB/day.
     You are on target with your plan.`);
}


}

dataPlan(50,12,25);
