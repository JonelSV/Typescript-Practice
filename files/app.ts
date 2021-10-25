console.log("Squid Game planning")

// Typescript types CORE
// NUMBER
// STRING 

function add (n1: number, n2: number) {
    if(typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error ('Incorrect input')
    }
    return n1 + n2;
}

const number1 = 5;
const number2 = 10;

const result = add(number1, number2)
console.log(result);

// typescript typeof

console.log(typeof number2)