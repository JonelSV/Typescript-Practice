"use strict";
// import { Soldier } from './Oop'
Object.defineProperty(exports, "__esModule", { value: true });
// let Legionaire = new Soldier("Titus", "Pulo");
// let Legionaire2 = new Soldier("Macius", "Tyranus")
// console.log(Legionaire)
// console.log(Legionaire2)
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
console.log(myShape.getInfo());
console.log(myCircle.getInfo());
console.log(myRectangle.getInfo());
