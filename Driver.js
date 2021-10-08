"use strict";
// import { Soldier } from './Oop'
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
console.log(myCircle.getInfo());
console.log(myRectangle.getInfo());
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
    let myCricketCoach = new CricketCoach_1.CricketCoach();
    let myGolfCoach = new GolfCoach_1.GolfCoach();
    let theCoaches = [];
    theCoaches.push(myCricketCoach);
    theCoaches.push(myGolfCoach);
    for (let tempCoach of theCoaches) {
        console.log(tempCoach.getDailyWorkout());
    }
}
