class Customer {
    
    firstName: string;
    lastName: string;
    rank: string;
    loyalty: string;
    private secret: string;
    private age: number;


    constructor ( fName: string, lName: string, position: string, allegiance: string, age: number, secret: string) {
        this.firstName = fName;
        this.lastName = lName;
        this.rank = position;
        this.loyalty = allegiance;
        this.age = age;
        this.secret = secret;
    }

    // GETTER AND SETTER = HOW TO DEFINE
    // Getter
    public getSecret(): string {
        return this.secret;
    }

    public setSecret(secret: string) : void {
        this.secret = secret;
    } 

    //setter
    public setAget(age: number) : void {
        this.age = age;
    }

    public getAge() : number {
        return this.age;
    }

}

let myCustomer = new Customer("Julius", "Cesar", "Imperator", "Devoted Roman", 66, "cursed");
let romanCustomer = new Customer("Brutus", "Junius", "Consul", "Roman", 44, "has a lot of debt")

console.log(romanCustomer.getAge())

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