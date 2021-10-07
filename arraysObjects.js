"use strict";
var sports = ["Golf", "Basketball", "MMA", "Boxing", "Football"];
// FOR OF LOOP  
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var displayElementOfArray = sports_1[_i];
    // console.log(displayElementOfArray)
    if (displayElementOfArray == "MMA") {
        console.log(displayElementOfArray + " <============= My favorite");
    }
    else {
        console.log(displayElementOfArray + " is alright");
    }
}
var sports2 = ["Swimming", "Fencing"];
sports2.push("Baseball");
sports2.push("Karate");
for (var _a = 0, sports2_1 = sports2; _a < sports2_1.length; _a++) {
    var displaySports2 = sports2_1[_a];
    console.log(displaySports2);
}
// ============ Classes in Typescript ======
