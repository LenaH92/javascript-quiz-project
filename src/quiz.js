class Quiz {
    // YOUR CODE HERE:

    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions; //array
        this.timeLimit = timeLimit; //number
        this.timeRemaining = timeRemaining; // number
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        
        return this.questions[this.currentQuestionIndex]; 
  
    }
    
    moveToNextQuestion() {
        this.currentQuestionIndex += 1;
    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * this.questions.length); 
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]]; 
        }
    }

    checkAnswer(answer) {
        this.correctAnswers += 1;
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length){
            return false;
        } else {
            return true;
        }
    }
}

/* 
const test [
    "what day is it today",
    "other question",
    "whatever else",
    ...
] */