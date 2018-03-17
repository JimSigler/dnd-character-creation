const DiceRoller = require('./diceRoller').DiceRoller;

const character = ( function(){

  const classes = ["Fighter", "Rogue", "Paladin", "Mage", "Cleric", "Bard"];

  function sortLtoS(arrayToSort) {
    arrayToSort.sort( function(a, b) { return b-a; } );
    return arrayToSort;
  }

  function rollForStat(diceSize) {
    const maxDice = 4;
    let rolls = [];
    const roller = new DiceRoller(1, diceSize);
    for(let i=0; i< maxDice; i++){
      roller.rollDice();
      rolls.push(roller.getTotal());
    }
    rolls = sortLtoS(rolls);
    rolls.splice(3, 1);
    return rolls[0] + rolls[1] + rolls[2];
  }

  function rollAllStats(numberOfStats) {
    const stats = [];
    for(let i=0; i<numberOfStats; i++){
      stats.push(rollForStat(7));
    }
    return stats;
  }

  function getCharacterClass(rolls) {
    let largest=0;
    largest = rolls.indexOf(Math.max.apply(null, rolls));
    return classes[largest];
  }

  // *********************
  // function creates stats and gets the recommended character class
  // based on those stats.
  // Returns a JSON object with the stats and recommended class
  // *********************\
  function getCharacter() {
    const stats = rollAllStats(7);
    const classChoice = getCharacterClass(stats);
    const output = {
      "character": {
        "stats": {
          "str": stats[0],
          "dex": stats[1],
          "con": stats[2],
          "int": stats[3],
          "wis": stats[4],
          "cha": stats[5]
        },
        "class": classChoice
      }
    }
    return output;
  }

  return {
    getCharacter:   getCharacter,
  };

}());

module.exports = character;
