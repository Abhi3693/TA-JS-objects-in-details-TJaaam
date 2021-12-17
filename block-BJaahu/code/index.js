

// Prototypal pattern


let questionMethods = {
    isAnswerCorrect: function(ans) {
        return this.correctAnswer === ans
    },
    getCorrectAnswer: function() {
        return this.options[this.correctAnswer];
    }
}


function Question(title,options, ans) {
    let obj = Object.create(questionMethods);
    obj.title = title;
    obj.options = options;
    obj.correctAnswer = ans;

    return obj;
}


// Pseudoclassical Pattern


function Question(title,options, ans) {
    this.title = title;
    this.options = options;
    this.correctAnswer = ans;
}

Question.prototype = {
    isAnswerCorrect: function(ans) {
        return this.correctAnswer === ans
    },
    getCorrectAnswer: function() {
        return this.options[this.correctAnswer];
    }
}



// Class pattern

class Question {
    constructor(title,options, ans) {
        this.title = title;
        this.options = options;
        this.correctAnswer = ans;
    }
    isAnswerCorrect(ans) {
        return this.correctAnswer === ans
    }
    getCorrectAnswer() {
        return this.options[this.correctAnswer];
    }
}


let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);

let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);