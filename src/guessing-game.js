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
        this.mid = Math.ceil((this.min + this.max)/2);
        return this.mid;
    }

    lower() {
      this.max = this.guess() - 1; 
    }

    greater() {
       this.min = this.guess() + 1;
    }
}

module.exports = GuessingGame;
