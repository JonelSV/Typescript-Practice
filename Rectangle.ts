import { Shape } from "./Shape"; 

export class Rectangle extends Shape{
    constructor(theX: number, theY: number, private _width: number, private _length: number) {
        
        super(theX, theY)
    }
    // call getInfo from super then override with new ones
    
    getInfo() : string {
        return super.getInfo() + `, widht = ${this._width} length = ${this.length}`;
    }
    
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
} 