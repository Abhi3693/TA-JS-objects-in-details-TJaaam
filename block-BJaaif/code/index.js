/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/


// #### Challenge 1/1

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}
var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
    greet: function() {
      console.log(`Hello`);
    },
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  let person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}

var sandra = personFromPersonStore('Sandra', 26);

/********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function() {
  console.log(`Hi my name is ${this.name}`);
}

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/


/*** CHALLENGE 1 of 3 ***/


// #### Challenge 1/3

// Create a function `PersonConstructor` that uses the `this` keyword to save a single property onto its scope called `greet`. `greet` should be a function that logs the string 'hello'.

// #### Challenge 2/3

// Create a function `personFromConstructor` that takes as input a `name` and an `age`. When called, the function will create person objects using the `new` keyword instead of the Object.create method.

// #### Challenge 3/3

// Without editing the code you've already written, add an `introduce` method to the `PersonConstructor` function that logs "Hi, my name is [name]".





function PersonConstructor() {
  this.greet = function() {
    console.log(`Hello`)
  };
}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/


function personFromConstructor(name, age) {
  // let person = {};
  this.name = name;
  this.age = age;
  // mike.greet= PersonConstructor;
  // return person;  
}

var mike = new personFromConstructor('Mike', 30);

Object.setPrototypeOf(personFromConstructor, PersonConstructor);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
// add code here

// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/


// #### Challenge 1/2

// Create a class `PersonClass`. `PersonClass` should have a constructor that is passed an input of `name` and saves it to a property by the same name. `PersonClass` should also have a method called `greet` that logs the string 'hello'.

// #### Challenge 2/2

// Create a class `DeveloperClass` that creates objects by extending the `PersonClass` class. In addition to having a `name` property and `greet` method, `DeveloperClass` should have an `introduce` method. When called, `introduce` should log the string 'Hello World, my name is [name]'.





/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello`);
  }
}

class DeveloperClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function( ) {
      console.log(`Hello world my name is ${this.name}`);
    }
  }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// add code here

// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/




// Create an object `adminFunctionStore` that has access to all methods in the `userFunctionStore` object, without copying them over individually.

// #### Challenge 2/5

// Create an `adminFactory` function that creates an object with all the same data fields (and default values) as objects of the `userFactory` class, but without copying each data field individually.

// #### Challenge 3/5

// Then make sure the value of the 'type' field for `adminFactory` objects is 'Admin' instead of 'User'.

// #### Challenge 4/5

// Make sure that `adminFactory` objects have access to `adminFunctionStore` methods, without copying them over.

// #### Challenge 5/5

// Create a method called `sharePublicMessage` that logs 'Welcome users!' and will be available to `adminFactory` objects, but not `userFactory` objects. Do not add this method directly in the `adminFactory` function.







var userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore /* Put code here */;

function adminFactory(name, score) {

}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
