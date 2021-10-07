"use strict";
let sports = ["Golf", "Basketball", "MMA", "Boxing", "Football"];
// FOR OF LOOP  
for (let displayElementOfArray of sports) {
    // console.log(displayElementOfArray)
    if (displayElementOfArray == "MMA") {
        console.log(displayElementOfArray + " <============= My favorite");
    }
    else {
        console.log(displayElementOfArray + " is alright");
    }
}
let sports2 = ["Swimming", "Fencing"];
sports2.push("Baseball");
sports2.push("Karate");
for (let displaySports2 of sports2) {
    console.log(displaySports2);
}
// ============ Classes in Typescript ======
