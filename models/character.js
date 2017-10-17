var _=require('underscore');
var diceRoller = require('./diceRoller');

var character = (function(){

  var classes = ["Fighter", "Rogue", "Paladin", "Mage", "Cleric", "Bard"];

  function getCharacter(){
    var stats = rollAllStats(6);
    var classChoice = getCharacterClass(stats);
    var output = formatOutput(stats, classChoice);
    return output;
  }

  function rollAllStats(numberOfStats){
    var stats = [];
    for(var i=0; i<numberOfStats; i++){
      stats.push(rollForStat(6));
    }
    return stats;
  }

  function rollForStat(diceSize){
    var maxDice = 4;
    var rolls = [];
    var roller = new diceRoller(1, diceSize);
    for(var i=0; i< maxDice; i++){
      roller.rollDice();
      rolls.push(roller.getTotal());
    }
    rolls = sortLtoS(rolls);
    rolls.splice(3,1);
    return rolls[0] + rolls[1] + rolls[2];
  }

  function sortLtoS(arrayToSort){
    arrayToSort.sort(function(a, b) { return b-a});
    return arrayToSort;
  }

  function getCharacterClass(rolls){
    var largest=0;
    largest = rolls.indexOf(Math.max.apply(null, rolls));
    return classes[largest];
  }

  function formatOutput(rolls, classChoice){
    var output = "<table>";
    output += ` <tr> <td> STR: </td> <td> ${rolls[0]} </td> </tr> `;
    output += ` <tr> <td> DEX: </td> <td> ${rolls[1]} </td> </tr> `;
    output += ` <tr> <td> CON: </td> <td> ${rolls[2]} </td> </tr> `;
    output += ` <tr> <td> INT: </td> <td> ${rolls[3]} </td> </tr> `;
    output += ` <tr> <td> WIS: </td> <td> ${rolls[4]} </td> </tr> `;
    output += ` <tr> <td> CHA: </td> <td> ${rolls[5]} </td> </tr> `;
    output += " </table> ";
    output += `<h2>Recommended Class: ${classChoice}</h2>`;
    return output;
  }

  return {
    getCharacter:   getCharacter
  };

})();

module.exports = character;
