"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, _width, length) {
        super(theX, theY);
        this._width = _width;
        this.length = length;
    }
    // call getInfo from super then override with new ones
    getInfo() {
        return super.getInfo() + `, widht = ${this._width} length = ${this.length}`;
    }
}
exports.Rectangle = Rectangle;
