class GuessingGame {
    
    constructor() {
        this.min = 0;  
        this.max = 0 ; 
    }
    setRange(min, max) {
        this.min = min;  
        this.max = max; 
    }
    guess() {
        const mid = Math.floor((this.min + this.max + 1)/2);
        console.log(mid);
        return mid;
    }
    lower() {
      this.max = this.guess() - 1; 
    }
    greater() {
       this.min = this.guess() +  1;
    }
}

module.exports = GuessingGame;
