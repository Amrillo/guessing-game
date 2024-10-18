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
        const mid = Math.ceil((this.min + this.max)/2);
        console.log(mid);
        return mid;
    }
    greater() {
        this.min = this.guess();
     }

    lower() {
      this.max = this.guess(); 
    }

}

module.exports = GuessingGame;
