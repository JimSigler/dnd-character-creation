const _ = require('underscore');

ADie.prototype.d6 = function() {
    this.size = 6;
    return this;
}

ADie.prototype.ofSize = function(value) {
  if(isNaN(value) || value < 1) {
    value = 6;
  }
  this.size = value;
  return this;
}

ADie.prototype.d20 = function() {
    this.size = 20;
    return this;
}

ADie.prototype.d4 = function() {
    this.size = 4;
    return this;
}

ADie.prototype.d8 = function() {
    this.size = 8;
    return this;
}

ADie.prototype.d10 = function() {
    this.size = 10;
    return this;
}

ADie.prototype.d12 = function() {
    this.size = 12;
    return this;
}

ADie.prototype.percentile = function() {
    this.size = 100;
    return this;
}

ADie.prototype.roll = function() {
    if(this.size === 0 || this.size === undefined) {
        this.size = 6;
    }
    this.face = _.random(1, this.size);
    return this;
}

ADie.prototype.getValue = function () {
    return this.face;
}

ADie.prototype.getSize = function() {
  return this.size;
}

function ADie() {
    this.face = 0;
    this.size = 0;
}

module.exports = ADie;