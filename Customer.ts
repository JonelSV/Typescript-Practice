class Customer {
    
    firstName: string;
    lastName: string;
    rank: string;
    loyalty: string;
    private secret: string;


    constructor ( fName: string, lName: string, position: string, allegiance: string) {
        this.firstName = fName;
        this.lastName = lName;
        this.rank = position;
        this.loyalty = allegiance;
        
    }

    // GETTER AND SETTER = HOW TO DEFINE

    public getSecret(): string {
        return this.secret;
    }




}

let myCustomer = new Customer("Julius", "Cesar", "Imperator", "Devoted Roman");
let romanCustomer = new Customer("Brutus", "Junius", "Consul", "Roman")

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