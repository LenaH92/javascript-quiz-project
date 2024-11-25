class Question {
    // YOUR CODE HERE:
    constructor (text, choices, answer, difficulty) {
        this.text = text; //string
        this.choices = choices; // arr of string [1,2 ,3, 4,5]
        this.answer = answer; //srting
        this.difficulty = difficulty; // number 1 -3 (easienst to hardest)
    }

    shuffleChoices() {

        for (let i = this.choices.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * this.choices.length); 
            [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]]; 
          } 
        return this.choices; 
        
    }
}