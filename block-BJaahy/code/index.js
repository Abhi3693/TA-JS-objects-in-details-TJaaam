class Square {
    constructor (side) {
        this.width = side;
        this.height = side;
    }
    static isEqual(one, two) {
        return (one.width * one.height) === (two.width * two.height);
    }
    set area(value){
        let num = Math.sqrt(value);
        this.height = num;
        this.width = num;
    }
    get area() {
        return this.width * this.height;
    }
    description(){
        alert(`The Square is ${this.width} * ${this.height}`)
    }
    calcArya() {
        return `The area of Square is ${this.width * this.height}`
    }
}
let one = new Square(20);

console.group("One");
console.log(one.width);
console.log(one.height);
console.log(one.description());
console.log(one.calcArya());
console.groupEnd();

let two = new Square(50);

console.group("Two");
console.log(two.width);
console.log(two.height);
console.log(two.description());
console.log(two.calcArya());
console.groupEnd();

let three = new Square(80);

console.group("Three");
console.log(three.width);
console.log(three.height);
console.log(three.description());
console.log(three.calcArya());
console.groupEnd();





class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set fullname(value) {

        if(value.length < 5 ) {
            alert(`Full name should be more than 5 characters`)
        } else {
            let splitVal = value.split(" ")
            this.firstName = splitVal[0];
            this.lastName = splitVal[1];
        }
    }
    get fullname() {
        return `${this.firstName} ${this.lastName}`
    }
    nameContains(value) {
        let fullname = this.firstName + this.lastName;
        return fullname.includes(value);
    }
}

let firstUser = new User("Abhi", "mane");
let secondUser = new User("Gauri", "Jagdale");