const Die = require('./adie');

class DiceRoller{

  constructor(count, size) {
    this.count = count;
    this.size = size;
    this.rolls = [];
    this.total = 0;
  }

  //
  rollDice() {
    this.total = 0;
    if(this.count > 0 && this.size > 0) {
      for(let i=0; i< this.count; i++) {
        const d = new Die(this.size);
        const roll = d.roll();
        this.rolls.push(roll);
        this.total += roll;
      }
    }
  }

  getTotal() {
    return this.total;
  }

  getRolls() {
    return this.rolls;
  }

}

module.exports = DiceRoller;
