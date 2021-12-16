
// variable pattern

let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAns = 1;

function isAnswerCorrect(index) {
    return index === correctAns;
}

function getCorrectAnswer() {
    return options[correctAns];
}

// // console.log(getCorrectAnswer());
// // console.log(isAnswerCorrect(1));

// Object pattern

let obj = {
    title: 'Where is the capital of Jordan',
    options:['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAns:1,
    isAnswerCorrect(index){
        return index === obj.correctAns;
    },
    getCorrectAnswer() {
        return obj.options[obj.correctAns];
    }
}



// Factory Pattern


function createQuize (title, options,ans) {
    let quize = {};
    quize.name = title;
    quize.options = options;
    quize.correctAnswerIndex = ans;

    quize.isAnswerCorrect = function(index) {
        return this.correctAnswerIndex === index;
    } 
    quize.getCorrectAnswer = function() {
        return this.options[quize.correctAnswerIndex];
    }  
    return quize;
}



// Prototypal class        // use of dunder proto

let createQuizeMethods = {
    isAnswerCorrect: function(index) {
        return this.correctAnswerIndex === index;
    } ,
    getCorrectAnswer: function() {
        return this.options[this.correctAnswerIndex];
    }  
}


function CreateQuize (title, options,ans) {
    let obj = Object.create(createQuizeMethods)    
    this.name = title;
    this.options = options;
    this.correctAnswerIndex = ans;

    return obj
}



// PsuedoClassical pattern

function CreateQuize (title, options,ans) {
    let obj = Object.create(CreateQuize.prototype)    
    this.name = title;
    this.options = options;
    this.correctAnswerIndex = ans;

    return obj
}

CreateQuize.prototype = {
    
    isAnswerCorrect: function(index) {
        return this.correctAnswerIndex === index;
    } ,
    getCorrectAnswer: function() {
        return this.options[this.correctAnswerIndex];
    }  
}


// let qus1 = new CreateQuize("Who is superStar", ["Abhishek", "John", "Salman", "Amitabh", "Arjun"], 3);
// let qus2 = new CreateQuize("Which is capital of India ",["Mumbai","Pune","Kolkata","Chhenai","Delhi","Benguluru","Hyd"],4);



// Class pattern

class User {
    constructor(ques,options,ans) {
        this.name = ques;
        this.options = options;
        this.correctAnswerIndex = ans;

    }
    isAnswerCorrect(index) {
        return this.correctAnswerIndex === index;
    } 
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }  
}


let qus1 = new User("Who is superStar", ["Abhishek", "John", "Salman", "Amitabh", "Arjun"], 3);
let qus2 = new User("Which is capital of India ",["Mumbai","Pune","Kolkata","Chhenai","Delhi","Benguluru","Hyd"],4);
