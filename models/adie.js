const _ = require('underscore');

// *******************
// creates a single die.  If the given die size (number of sides) is greater
// than zero, the die is created and can be used.  If no size is given or if
// the size is zero, the die is returned as a six-sided die.
// *******************

class aDie {
  // ***************
  // the die is created by providing a size (number of sides) which is greater
  // than zero.  If no size is given or if the size is non-numeric or less than
  // zero, then a six-sided die is returned.  Otherwise, a die with the appropriate
  // size is returned.
  // Usage:
  //
  //   let dice = new aDie(20);
  //
  // This creates a 20-sided die which can now be rolled to get a value.
  // ***************
  constructor(size) {
    if(size > 0){
      this.size = size;
    }
    else{
      this.size=6;
    }
  }

  // **************
  // getSize() can be used to return the number of sides the die has.  The size
  // cannot be changed once the die is created.  If you wish to change the number
  // of sides, a new die must be created.
  // **************
  getSize(){
    return this.size;
  }

  // **************
  // roll() returns a random number between 1 and the size of the die.  A die can
  // be rolled as many times as needed but will always return a new random number.
  // The die does not remember it's past roll(s).
  // **************
  roll() {
    if(this.size > 0){
      return _.random(1, this.size);
    }
    return 0;
  }
}

exports.aDie = aDie;
