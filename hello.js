console.log("Hello World");
console.log("typescript is a strongly typed language which is a superset of JS");
console.log("This is a practice of my typescript skills" + "First time trying this");
var found = true;
var grade = 99.5;
var firstName = "Makarov";
var myData = 50.0;
myData = false;
myData = "Vladimir";
myData = 19;
console.log(" " + found + "\"data type any can be used for any generic data input like \" + " + myData + " + \" just like so\"");
// ========== IMPORTANT
// By default tsc will sitll generate a .js file even though errors are found.
// prevent this with a  COMPILER  FLAG
// tsc-noEmitOnError hello.ts
for (var i = 0; i < 5; i++) {
    console.log("iteration = " + i);
}
var reviews = [5, 5, 4.5, 1, 3, 2];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log("revies sub i = " + reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("the average total reviews is : " + average);
