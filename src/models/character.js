const DiceRoller = require('./diceRoller').DiceRoller;
const _ = require('underscore');

function Character(){
    return {
        getCharacter,
        getClasses
    };
}

module.exports = Character;

const numberOfStatsToRoll = 6; // total number of stats to roll.
const statDiceSize = 6; // size of dice used when rolling stats
const classes = ["Fighter", "Rogue", "Paladin", "Mage", "Cleric", "Bard"];
  
// *********************
// function sorts an array from largest to smallest then returns the array.
// *********************
function sortLtoS(arrayToSort) {
    arrayToSort.sort( function(a, b) { return b-a; } );
    return arrayToSort;
}
// *********************
// function rolls maxDice number of dice then returns the sum of the largest
// three dice rolls.  This is one common approach to rolling a character.
// *********************
function rollForStat(diceSize) {
    let maxDice = 4;
    let rolls = [];
    let roller = new DiceRoller(1, diceSize);
    for(let i=0; i< maxDice; i++){
        roller.rollDice();
        rolls.push(roller.getTotal());
    }
    rolls = sortLtoS(rolls);
    rolls.splice(3, 1);
    return rolls[0] + rolls[1] + rolls[2];
}
// *********************
// function rolls all dice for the number of stats requested
// returns an array of those stats.
// *********************
function rollAllStats(numberOfStats) {
    let stats = [];
    for(let i=0; i<numberOfStats; i++){
        stats.push(rollForStat(statDiceSize));
    }
    return stats;
}
// *********************
// function returns a character class depending upon the largest stat that
// was rolled.  While this is not the only way to determine what type of
// character should be created, it is the best given the randomness requested.
// *********************
function getCharacterClass(rolls) {
    let largest=0;
    largest = rolls.indexOf(Math.max.apply(null, rolls));
    return classes[largest];
}

function getRandomClass() { 
    let number = _.random(0, classes.length-1);
    return classes[number];
}

// *********************
// function creates stats and gets the recommended character class
// based on those stats.
// Returns a JSON object with the stats and recommended class
// *********************
function getCharacter() {
    let stats = rollAllStats(numberOfStatsToRoll);
    let classChoice = getRandomClass(stats);
    let output = {
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

// *********************
// function returns all available classes
// *********************
function getClasses(){
    return classes;
}