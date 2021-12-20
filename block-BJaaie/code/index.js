// Pseudoclassical Pattern


function CreateAnimal(location, noOfLegs) {
    this.location = location;
    this.numberOfLegs = noOfLegs;
}

CreateAnimal.prototype = {
    eat: function() {
        console.log(`I live in ${this.location} and I can eat`)
    },       
    changeLocation: function(newLocation) {
        this.location = newLocation
    },
    summary: function() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
    }
}


function CreateDog(location, noOfLegs, name, color) {
    CreateAnimal.call(this, location, noOfLegs);
    this.name = name;
    this.color = color;
}

CreateDog.prototype = {
    bark: function() {
        return `I am ${this.name} and I can bark 🐶`;
    }, 
    changeName: function(newName) {
        this.name = newName;
        return this.name;
    }, 
    changeColor: function(newColor) {
        this.color = newColor;
        return this.color
    }, 
    summary: function() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }, 
}


function CreateCat(location, noOfLegs, name, colorOfEyes) {
    CreateAnimal.call(this, location, noOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
    meow: function() {
        return `I am ${this.name} and I can do mewo meow 😹`;
    }, 
    changeName: function(newName) {
        this.name = newName;
        return this.name;
    }, 
    changeColor: function(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    }, 
    summary: function() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }, 
}
Object.setPrototypeOf(CreateDog.prototype , CreateAnimal.prototype);
Object.setPrototypeOf(CreateCat.prototype , CreateAnimal.prototype);


// let dog = new CreateDog("morochi", 4, "tyson", "black")
// let cat = new CreateCat("mane", 4, "manju", "brown")




// Class Pattern


class Animal {
    constructor(location, noOfLegs){
        this.location = location;
        this.numberOfLegs = noOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    }       
    changeLocation(newLocation) {
        this.location = newLocation;
    }
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
    }
}


class Dog extends Animal{
    constructor(location, noOfLegs, name, color){
        super(location, noOfLegs);
        this.name = name;
        this.color = color;
    }
    bark() {
        return `I am ${this.name} and I can bark 🐶`;
    } 
    changeName(newName) {
        this.name = newName;
        return this.name;
    } 
    changeColor(newColor) {
        this.color = newColor;
        return this.color
    } 
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
    
}


class Cat extends Animal{
    constructor(location, noOfLegs, name, colorOfEyes) {
        super(location, noOfLegs);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow() {
        return `I am ${this.name} and I can do mewo meow 😹`;
    }
    changeName(newName) {
        this.name = newName;
        return this.name;
    } 
    changeColor(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    } 
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    } 
}


let dog = new Dog("morochi", 4, "tyson", "black")
let cat = new Cat("mane", 4, "manju", "brown")
