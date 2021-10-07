"use strict";
var Customer = /** @class */ (function () {
    function Customer(fName, lName, position, allegiance, age, secret) {
        this.firstName = fName;
        this.lastName = lName;
        this.rank = position;
        this.loyalty = allegiance;
        this.age = age;
        this.secret = secret;
    }
    // GETTER AND SETTER = HOW TO DEFINE
    // Getter
    Customer.prototype.getSecret = function () {
        return this.secret;
    };
    Customer.prototype.setSecret = function (secret) {
        this.secret = secret;
    };
    //setter
    Customer.prototype.setAget = function (age) {
        this.age = age;
    };
    Customer.prototype.getAge = function () {
        return this.age;
    };
    return Customer;
}());
var myCustomer = new Customer("Julius", "Cesar", "Imperator", "Devoted Roman", 66, "cursed");
var romanCustomer = new Customer("Brutus", "Junius", "Consul", "Roman", 44, "has a lot of debt");
console.log(romanCustomer.getAge());
// myCustomer.firstName = "Julius Augustus";
// myCustomer.lastName = "Cesar"
// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);
console.log(myCustomer);
//======================== MODIFIERS ============
// PUBLIC = PROPERTY ACCESSIBLE TO ALL CLASSES
// PROTECTED = PROPERTY IS ONLY ACCESSIBLE IN CURRENT CLASS AND SUBCLASSES
// PRIVATE = PROPERTY IS ONLY ACCESSIBLE IN THE CURRENT CLASS.
// TO PREVENT TYPESCRIPT FROM COMPILING WITH ERRORS:
// USE tsc --noEmitOnError Customer.ts  (this means, do not generate a javascript file if there is a compilation error)
// ========================================
// Typescript has alternate syntax known as ACCESSORS. USES SPECIAL GET/SET METHODS
// convention is to use leading underscore in property name eg. _firsName: string;
// "set" Accessor has no return type , but "get" has
// public by default
// get firstName(): string {
//     return this._firstName;
// }
// set firstName(value: string): string {
//     this._firstName = value
// }
// IF NOT USING ES5 must COMPILER FLAG FOR GET/SET use ==>    tsc --target ES5 customer.ts
// cAN set up a tsconfig.json
// it can store All COMPILER FLAG IN one file for easy use;
// defines compiler options and project settings. Place file in root directory. Example below
// {
//     "compilerOptions": {
//         "noEmitOnError": true,
//         "target": "es5"
//     }
// }
// step above can be done by using console :::: > tsc --init (then edit afterwards)
