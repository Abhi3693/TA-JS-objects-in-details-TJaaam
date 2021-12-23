let questionHolder = document.querySelector(".question-holder");
let addScore = document.querySelector(".add-score");
let displayResult = document.querySelector(".display-result");

let score = 0;
let userAns;

class Question{
    constructor(title,options,ansIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswer = ansIndex;
    }

    isCorrectAnswer(val) {
        return val === this.correctAnswer;
    }

    getCorrectAnswer() {
        return this.correctAnswer;
    }

    createUI() {

        addScore.innerHTML = "";

        let text = document.createElement("h2");
        text.innerText = this.title;

        let ul = document.createElement("ul");

        let allOptions = [];

        this.options.forEach((option)=> {
            let li = document.createElement("li");
            let opt = document.createElement("p");
                opt.innerText = option;
            li.append(opt);
            allOptions.push(li);
        })

        ul.append(text,allOptions[0],allOptions[1],allOptions[2],allOptions[3]);

        addScore.append(score);
        return ul;
    }
}


class Quiz{
    constructor(list = []) {
        this.allQuestions = list;
        this.activeIndex = 0;
        this.score = 0;
        this.createUI();
    }

    prevQuestion() {
        
        if(this.activeIndex === 0) {
            this.activeIndex = 0;
        } else {
            this.activeIndex = Number(this.activeIndex - 1);
        }
        this.createUI()
    }

    nextQuestion() {
        if(this.activeIndex === this.allQuestions.length - 1) {
            this.activeIndex = 0 ;
        } else{
            this.activeIndex = this.activeIndex + 1;
        }
        this.createUI();
    }

    updateScore(currQus) {
       
        if(event.keyCode === 13 && event.target.value !== "") {

            displayResult.innerHTML = "";
            let value = Number(event.target.value);

            if(this.isCorrectAnswer(value)) {
                userAns = `Right Answer`;
                score = Number(score) + 1;
                displayResult.append(userAns);
                this.createUI();
            } else {
                userAns = `Wrong Answer`;
                displayResult.append(userAns);
                this.createUI();
            }
        }
    }

    createUI() {

        questionHolder.innerHTML = "";
        displayResult.innerHTML = "";

        let index = this.activeIndex;

        let currentQuestion = this.allQuestions[index];

        let ul = currentQuestion.createUI();
 
        let prevBtn = document.createElement("button");
        prevBtn.innerText = "Prev";
        prevBtn.classList.add("btn");        
        prevBtn.classList.add("prev");  
        
        prevBtn.addEventListener("click", this.prevQuestion.bind(this));

        let submitAnswer = document.createElement("input");
        submitAnswer.classList.add("submitAnswer");
        submitAnswer.placeholder = "Enter your Number of option";

        submitAnswer.addEventListener("keyup", this.updateScore.bind(currentQuestion));

        let nextBtn = document.createElement("button");
        nextBtn.innerText = "Next";
        nextBtn.classList.add("btn");
        nextBtn.classList.add("next");
        
        nextBtn.addEventListener("click", this.nextQuestion.bind(this));

        ul.append(prevBtn,submitAnswer,nextBtn);

        questionHolder.append(ul);
    }
}

let first = new Question("What is capital of India?",["Mumbai","Kolkata","Delhi","Chennai"],2);
let second = new Question("Ksndbv jksdn kjadsnc name?",["Xksdn","Lskjdb","Zsdn","Fakjsd"],1);
let third = new Question("Asah kajs jasdh uwe?",["Gksdjbc","Bjacsn","Cajsh","Sasjdn"],3);
let forth = new Question("Wkasjd kjasd porei kalsd?",["Nsjbd","Qjkdn","Rkjcn","Haksn"],0);
let fifth = new Question("Pkasj weiouy kajsn?",["Tasjkcbd","Yakjsb","Unajbs","Iwueh"],1);

const quiz = new Quiz([first, second,third,forth,fifth]);