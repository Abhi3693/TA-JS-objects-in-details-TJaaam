
class CreateUser{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello() {
        alert(`Welcome ${this.name}`);
    }
}

let personOne = new CreateUser("John", 28);
console.group("John");
console.log(personOne.name)
console.log(personOne.age)
console.log(personOne.sayHello())
let personTwo = new CreateUser("Arya", 22);
console.group("Arya");
console.log(personTwo.name)
console.log(personTwo.age)
console.log(personTwo.sayHello())

