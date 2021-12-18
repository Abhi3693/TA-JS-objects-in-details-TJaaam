let animalMethods = {
    summury: function () {
        return `I live in ${this.location} and I have ${this.noOfLegs} legs`
    },
    eat: function() {
        console.log(`I live in ${this.location} and I can eat`)
    }, 
    changeLocation: function(newLocation) {
        this.location = newLocation
    }
}

let dogMethods = {
    bark: function () {
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function (newName) {
        this.name = newName;
    },
    changeColor: function (newColor) {
        this.color = newColor;
    },
    summary : function() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`; 
    }
}

let catMethods = {
    meow: function () {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName: function (newName) {
        this.name = newName;
    },
    changeColor: function (newColor) {
        this.color = newColor;
    },
}

function createAnimal(location, noOfLegs) {
    let obj = Object.create(animalMethods);
    obj.location = location;
    obj.noOfLegs = noOfLegs;
    return obj;
}

function createDog(location, noOfLegs,name,color) {
    let obj = Object.create(dogMethods);
    obj.location = location;
    obj.noOfLegs = noOfLegs;
    obj.name = name;
    obj.color = color;
    return obj;
}

function createCat(location, noOfLegs,name,colorOfEye) {
    let obj = Object.create(catMethods);
    obj.location = location;
    obj.noOfLegs = noOfLegs;
    obj.name = name;
    obj.colorOfEye = colorOfEye;
    return obj;
}

Object.setPrototypeOf(dogMethods, animalMethods);
Object.setPrototypeOf(catMethods, animalMethods);

let dog = new createDog("Morochi", 4, "Tyson", "Black");
let cat = new createCat("Pune", 2, "Manju", "Brown");