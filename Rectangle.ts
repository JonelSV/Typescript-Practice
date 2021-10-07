import { Shape } from "./Shape"; 

export class Rectangle extends Shape{
    constructor(theX: number, theY: number, private _width: number, private length: number) {
        
        super(theX, theY)
    }
    // call getInfo from super then override with new ones

    getInfo() : string {
        return super.getInfo() + `, widht = ${this._width} length = ${this.length}`;
    }

} 