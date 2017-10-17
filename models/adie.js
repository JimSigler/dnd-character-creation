const _ = require('underscore');

class aDie {
  constructor(size) {
    this.size = size;
  }

  roll() {
    if(this.size > 0){
      return _.random(1, this.size);
    }
    return 0;
  }
}

module.exports = aDie;
