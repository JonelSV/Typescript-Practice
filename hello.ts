console.log("Hello World");
console.log("typescript is a strongly typed language which is a superset of JS")
console.log("This is a practice of my typescript skills" + "First time trying this")


let found: boolean = true;
let grade: number = 99.5;
let firstName: string = "Makarov";

let myData: any = 50.0;

myData = false;
myData = "Vladimir"
myData = 19;
console.log(` ${found}"data type any can be used for any generic data input like " + ${myData} + " just like so"`)


// ========== IMPORTANT
// By default tsc will sitll generate a .js file even though errors are found.
// prevent this with a  COMPILER  FLAG
// tsc-noEmitOnError hello.ts