// import { Soldier } from './Oop'


// let Legionaire = new Soldier("Titus", "Pulo");
// let Legionaire2 = new Soldier("Macius", "Tyranus")

// console.log(Legionaire)
// console.log(Legionaire2)


import { Shape } from './Shape';
import { Circle } from './Circle';

let myShape = new Shape (10, 15);
let myCircle = new Circle(5,10,20)
console.log(myShape.getInfo());
console.log(myCircle.getInfo());