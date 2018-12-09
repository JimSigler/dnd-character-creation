const ADie = require('./adie');

DiceRoller.prototype.withCount = function(value) {
    if(isNaN(value) || value < 1){
        value = 1;
    }
    this.count = value;
    return this;
};

DiceRoller.prototype.ofSize = function(value) {
    if(isNaN(value) || value < 1){
        value = 6;
    }
    this.size = value;
    return this;
};

DiceRoller.prototype.values = function() {
    return {
        "diceSize": this.size,
        "diceCount": this.count,
        "rolls": this.rolls,
        "total": this.total
    }
};

DiceRoller.prototype.getTotal = function() {
    return this.total;
};

DiceRoller.prototype.rollDice = function() {
  this.roller = [];
  this.rolls = [];
  this.total = 0;
  for(let i=0; i< this.count; i++){
      this.roller.push(new ADie().ofSize(this.size));
  }
  if(this.count > 0 && this.size > 0) {
      this.roller.forEach((die) => {
        die.roll();
        this.rolls.push(die.getValue());
        this.total += die.getValue();
      });
  }
  return this;
};

DiceRoller.prototype.getRolls = function() {
    return this.rolls;
};

DiceRoller.prototype.count = function() {
  return this.count;
};

DiceRoller.prototype.size = function() {
  return this.size;
};

function DiceRoller() {
    this.size = 0;
    this.count = 0;
    this.rolls = 0;
    this.total = 0;
    this.rolls = [];
    this.roller = [];
}

module.exports = DiceRoller;