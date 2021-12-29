let questionHolder = document.querySelector(".question-holder");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let showResult = document.querySelector(".showResult");
let totalQuestions = document.querySelector(".total-questions p");

class Question{
    constructor(title,options,correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isCorrectAnswer(answer) {
        return this.options[this.correctAnswerIndex] === answer;
    }

    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }
}

class Quiz{
    constructor(questions = [], score = 0) {
        this.questions = questions;
        this.activeIndex = 0;
        this.score = score;
    }
    addQuestion(title, options, correctAnswerIndex){
        let question = new Question(title, options, correctAnswerIndex);
        this.questions.push(question);
    }
    previousQuestion(){
        this.activeIndex = this.activeIndex - 1;
        this.createUI();
    }
    nextQuestion(){
        this.activeIndex = this.activeIndex + 1;
        this.createUI();
    }
    handleButton() {
        if(this.activeIndex === 0) {
            prevBtn.style.visibility = "hidden";
        } else if (this.activeIndex === this.questions.length - 1){
            nextBtn.style.visibility = "hidden";
            showResult.style.display = "inline-block";
        } else {
            prevBtn.style.visibility = "visible";
            nextBtn.style.visibility = "visible";
            showResult.style.display = "none";
        }
    }
    increamentScore() {
        this.score = this.score + 1;
    }
    createUI(){
        questionHolder.innerHTML = "";
        let activeQuestion = this.questions[this.activeIndex];

            let form = document.createElement("form");
            let fieldset = document.createElement("fieldset");
            let legend = document.createElement("legend");
            legend.innerText = activeQuestion.title;
            let optionsElm = document.createElement("div");

            activeQuestion.options.forEach((option, index)=> {
                let input = document.createElement("input");
                input.type = "radio";
                input.id = `option-${index}`;
                input.value = option;
                input.name = "options";

                let label = document.createElement("label");
                label.for = index;
                label.innerText = option;
                let div = document.createElement("div");

                input.addEventListener("input", (event)=> {
                    if(activeQuestion.isCorrectAnswer(event.target.value)){
                        this.increamentScore();
                    }
                })

                div.append(input, label);
                optionsElm.append(div);
            })
            fieldset.append(legend,optionsElm);
            form.append(fieldset);
            
            this.handleButton();
            questionHolder.append(form);
    }
}


function init() {
    let quiz = new Quiz();

    let quizCollection = [{title:"What is capital of India?", options:["Mumbai","Kolkata","Delhi","Chennai"],correctAnswerIndex: 2},
    {title:"Which is the largest Ocian?", options:["Indian", "Pacific", "Atlantic", "Artic"],correctAnswerIndex: 1},
    {title:"Where is the Kohinoor Diamond?", options:["New Delhi", "New York", "Amstradum", "London"],correctAnswerIndex: 3},
    {title:"Which is the pink city", options:["Shrinagar", "Pune", "Jaipur", "Banguluru"],correctAnswerIndex: 2},
    {title:"Who is Prime Minister of India", options:["N. Modi", "A. Shaha", "R. Singh", "N. Gadkari"],correctAnswerIndex: 0},
    ];


    quizCollection.forEach((question)=> {
        quiz.addQuestion(question.title, question.options, question.correctAnswerIndex);
    })
    quiz.createUI();
    prevBtn.addEventListener("click", quiz.previousQuestion.bind(quiz));
    nextBtn.addEventListener("click", quiz.nextQuestion.bind(quiz));

    showResult.addEventListener("click", ()=>{
        alert(`Your Score is ${quiz.score}`);
    });
}

init();
