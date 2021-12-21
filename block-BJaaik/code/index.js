class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {
        console.log(`I do eat, when i am hungry`);
    }
    sleep() {
        console.log(`I do sleep at night and some time at afternoon😅`);
    }
    walk() {
        console.log(`I do walk when there is no option`);
    }
}

class Player extends Person {
    constructor (name, age, gender, sportName) {
        super(name,age,gender);
        this.sportName = sportName;
    }
    play() {
        console.log(`${this.name} love to play sport`);
    }
}

class Teacher extends Person {
    constructor (name,age,gender,instituteName) {
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach() {
        console.log("Teacheing is my other name");
    }
}

class Artist extends Person {
    constructor (name,age,gender,kindName) {
        super(name,age,gender);
        this.kind = kindName;
    }
    createArt() {
        console.log("Art is most importatnt part of life");
    }
}

class Crickter extends Player {
    constructor(name,age,gender,teamName) {
        super(name,age,gender, "Cricket");
        this.teamName = teamName;
    }
    playCricket() {
        console.log("I love to play Cricket");
    }
}


let rohit = new Crickter ("Rohit Sharma", 33, "male", "India");

let arigit = new Artist("Arigit Sing", 35, "male", "Singer");

let Kalam = new Teacher("Dr. A P J Abdul Kalam", 75, "male", "Scientist");

let sindhu = new Player("P V Sindhu", 28, "female", "Badminton");

let abhi = new Person("Abhi mane", 28, "male", "Student");