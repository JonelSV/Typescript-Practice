"use strict";
// import { Soldier } from './Oop'
Object.defineProperty(exports, "__esModule", { value: true });
// let Legionaire = new Soldier("Titus", "Pulo");
// let Legionaire2 = new Soldier("Macius", "Tyranus")
// console.log(Legionaire)
// console.log(Legionaire2)
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myShape.getInfo());
console.log(myCircle.getInfo());
