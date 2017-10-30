const Die = require('./aDie').aDie;

// **************
// DiceRoller creates a container in which one or more die can be rolled.
//
// **************
class DiceRoller{
  // **************
  // The constructor takes a die count and a die size.  It also creates an array
  // in which all the rolls can be stored.  A total is also created which holds
  // the sum of all the rolls.  *NOTE* this could be a calculated amount *NOTE*
  // If the size or count given is less than zero or non-numeric, then they are
  // given the defaults of count=1 and size=6.
  // Usage:
  //
  // let cupODice = new DiceROller(8, 6);
  //
  // This creates a dice roller with eight six-sided die.
  // **************
  constructor(count, size) {
    if(count > 0){
      this.count = count;
    }
    else{
      this.count = 1;
    }
    if(size > 0){
      this.size = size;
    }
    else{
      this.size = 6;
    }
    this.rolls = [];
    this.total = 0;
  }

  // **************
  // rollDice() rolls all the die in the dice holder.  It iterates through the
  // count and rolls the die.  It then adds that die roll to the total and then
  // stores that value in the rolls array.
  // **************
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

  // *************
  // getTotal() returns the total of the die rolls after all dice have been rolled.
  // *************
  getTotal() {
    return this.total;
  }

  // *************
  // getRolls() returns the array of rolls.
  // *************
  getRolls() {
    return this.rolls;
  }

}

exports.DiceRoller = DiceRoller;
