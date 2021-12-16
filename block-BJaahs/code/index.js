const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };



let title = testData.title;
let options = testData.options;
let correctAns = testData.correctAnswerIndex;

function isAnswerCorrect(index) {
    return index === correctAns;
}

function getCorrectAnswer() {
    return options[correctAns];
}

// console.log(getCorrectAnswer());
// console.log(isAnswerCorrect(1));

let obj = {
    title: testData.title,
    options:testData.options,
    correctAns:testData.correctAnswerIndex,
    isAnswerCorrect(index){
        return index === obj.correctAns;
    },
    getCorrectAnswer() {
        return obj.options[obj.correctAns];
    }
}

// console.log(obj.isAnswerCorrect(1))
// console.log(obj.getCorrectAnswer())


function createQuize (title, options,ans) {
    let quize = {};
    quize.name = title;
    quize.options = options;
    quize.correctAnswerIndex = ans;

    quize.isAnswerCorrect = function(index) {
        return quize.correctAnswerIndex === index;
    } 
    quize.getCorrectAnswer = function() {
        return quize.options[quize.correctAnswerIndex];
    }  
    return quize;
}

// let quize1 = createQuize(testData.title,testData.options,testData.correctAnswerIndex);






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


let quize1 = createQuize(testData.title,testData.options,testData.correctAnswerIndex);
let quize2 = createQuize("Which is capital of India ",["Mumbai","Pune","Kolkata","Chhenai","Delhi","Benguluru","Hyd"],4);



console.log(quize2.isAnswerCorrect(1));

console.log(quize2.getCorrectAnswer());
