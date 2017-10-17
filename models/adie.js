"use strict";

var _=require('underscore');

class adie {

  constructor(size){
    this.size = size;
  }

  roll(){
    if(this.size > 0){
      return _.random(1, this.size);
    }
    else {
      return 0;
    }
  }

}

module.exports = adie;
