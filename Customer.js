var Customer = /** @class */ (function () {
    function Customer(fName, lName, position, allegiance, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.rank = position;
        this.loyalty = allegiance;
        this.age = age;
    }
    // GETTER AND SETTER = HOW TO DEFINE
    // Getter
    Customer.prototype.getSecret = function () {
        return this.secret;
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
var myCustomer = new Customer("Julius", "Cesar", "Imperator", "Devoted Roman", 66);
var romanCustomer = new Customer("Brutus", "Junius", "Consul", "Roman", 44);
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
