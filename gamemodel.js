export class gameModel { 

    word = ''; 
    guesses = [char];
    #state = '';
    currentScore = 0;
    highScore = 0;   
    remainingTries = 7; 
    difficulty = ''

    constructor() {
        this.state = 'uninitialized';
    }  

    startGame(difficulty) { 
        if (this.#state === 'playing') {
            return;
        } 
        this.word = this.fetchWord(); 
        this.highScore = this.fetchHighScore(); 
        this.difficulty = difficulty; 
        if ('advanced' === difficulty.toLowerCase()) {
            this.remainingTries = 5;
        } 

    }  

    guess(letter) { 
        if (this.isLetterInWord(letter)) { 
            this.guesses.push(letter);
            this.currentScore += this.updateScore();
        } else {
            this.remainingTries--;
        }

    } 

    updateScore() {
        charArray = this.word.split("");
        count = 0;
        for (i = 0; i < charArray.length; i++) {
            if (charArray[i] === letter) {
                count++;
            }
        } 
        count *= 10; 
        return count;
    }
    
    fetchWord() {
        return this.word;
    } 

    fetchHighScore() {
        return 0;
    }
    //initializes & takes in difficulty string (‘Normal’ | ‘Advanced’) 
    getState() { 
        this.state;
    } 

    isLetterInWord(letter) {
        //checks if letter is in word 
        return this.word.includes(letter);
    } 

    isLetterGuessed(letter) {
        //checks if letter input is in guesses[char]
        return this.guesses.includes(letter);
    } 

    isWordComplete() { 
        //checks if user has correctly guessed all letters in word

    }  

    updateGameStatus() { 
        if (this.word.split('').every(l => this.guesses.includes(l))) { 
            this.state = 'won'; 
        } else if (gameState.remainingAttempts <= 0) { 
            this.state = 'lost'; 
        } 
    } 
}