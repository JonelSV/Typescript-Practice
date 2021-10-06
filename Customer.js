var Customer = /** @class */ (function () {
    function Customer(fName, lName, position, allegiance) {
        this.firstName = fName;
        this.lastName = lName;
        this.rank = position;
        this.loyalty = allegiance;
    }
    return Customer;
}());
var myCustomer = new Customer("Julius", "Cesar", "Imperator", "Roman");
// myCustomer.firstName = "Julius Augustus";
// myCustomer.lastName = "Cesar"
// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);
console.log(myCustomer);
