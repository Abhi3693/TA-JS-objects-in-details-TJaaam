let animalMethods = {

    eat: function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
    },
    summary: function(){
        console.log(`I live in ${this.location} and I have ${this.noOfLegs} legs`);
    },
}


function createAnimal(location, noOfLegs) {
    let obj = Object.create(animalMethods);
    obj.location = location;
    obj.noOfLegs = noOfLegs;
    return obj;
}


let catMethods = {
    meow: function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeName: function(name){
        this.name = name;
    },
    changeColorOfEyes: function(newColor){
        this.colorOfEye = newColor;
    },
    summary: function () {
        console.log(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`);
    }
}


function createCat(location, noOfLegs, name, colorOfEye) {
    let obj = createAnimal(location, noOfLegs);
    Object.setPrototypeOf(obj, catMethods);
    obj.name = name;
    obj.colorOfEye = colorOfEye;
    return obj;
}


let dogMethods = {
    bark: function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeName: function(name) {
        this.name = name;
    },
    changeColor: function(newColor){
        this.color = newColor;
    },
    summary: function() {
        console.log(`I am ${this.name} and I am of ${this.color} color. I can also bark`);
    }
}

function createDog(location, noOfLegs, name, color) {
    let obj = createAnimal(location, noOfLegs);
    Object.setPrototypeOf(obj, dogMethods);
    obj.name = name;
    obj.color = color;
    return obj;
}

Object.setPrototypeOf(dogMethods, animalMethods)
Object.setPrototypeOf(catMethods, animalMethods)


let cat =  createCat("Pune", 2, "Manju", "Brown");
let dog =  createDog("Morochi", 4, "Tyson", "Black");
