class Customer {
    
    firstName: string;
    lastName: string;
    rank: string;
    loyalty: string;


    constructor ( position: string, allegiance: string) {
        this.rank = position;
        this.loyalty = allegiance;
    }

}

let myCustomer = new Customer();

myCustomer.firstName = "Julius Augustus";
myCustomer.lastName = "Cesar"

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);