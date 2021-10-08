// import { Soldier } from './Oop'


// let Legionaire = new Soldier("Titus", "Pulo");
// let Legionaire2 = new Soldier("Macius", "Tyranus")

// console.log(Legionaire)
// console.log(Legionaire2)


import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle'
import { CricketCoach } from './CricketCoach';
import { GolfCoach } from './GolfCoach';
import { Coach } from './Coach';


let myCircle = new Circle(5,10,20);
let myRectangle = new Rectangle(0,0,3,7);

console.log(myCircle.getInfo());
console.log(myRectangle.getInfo());

let theShapes: Shape [] = [];


theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo())
    console.log(tempShape.calculateArea())
    console.log();

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCoaches: Coach[] = []; 

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let tempCoach of theCoaches) {

    console.log(tempCoach.getDailyWorkout());
}

}
        
  
