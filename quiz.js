class Quiz {
    constructor(questions){
        this.questions = questions;
        this.score = 0;
        this.currentQuestionIndex = 0;
    }
    getCurrentQuestion(){
        let question = this.questions[this.currentQuestionIndex];
        let questionOptions = question.options;
        let randomOptions = [];
        for (let i = 0; i < 4; i++) {
            let rand = Math.floor(Math.random() * questionOptions.length)
            const questionOption = questionOptions[rand];
            randomOptions.push(questionOption);
            questionOptions.splice(rand,1)
        }
        question.options = randomOptions;
        return question;
    }

    checkAnswer(answer){
        if(answer === this.getCurrentQuestion().answer){
            this.score += 10;
            return true
        }else{
            return false;
        }
    }

    update(){
        this.currentQuestionIndex++;
    }

    isEnd(){
        return this.questions.length === this.currentQuestionIndex;
    }
}


const quiz = new Quiz(questions);
