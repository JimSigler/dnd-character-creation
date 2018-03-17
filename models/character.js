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

  function formatOutput(rolls, classChoice) {
    let output = "<table>";
    output += ` <tr> <td> STR: </td> <td> ${rolls[0]} </td> </tr> `;
    output += ` <tr> <td> DEX: </td> <td> ${rolls[1]} </td> </tr> `;
    output += ` <tr> <td> CON: </td> <td> ${rolls[2]} </td> </tr> `;
    output += ` <tr> <td> INT: </td> <td> ${rolls[3]} </td> </tr> `;
    output += ` <tr> <td> WIS: </td> <td> ${rolls[4]} </td> </tr> `;
    output += ` <tr> <td> CHA: </td> <td> ${rolls[5]} </td> </tr> `;
    output += ` <tr> <td> RAN: </td> <td> ${rolls[6]} </td> </tr> `;
    output += " </table> ";
    output += `<h2>Recommended Class: ${classChoice}</h2>`;
    return output;
  }

  function getCharacter() {
    const stats = rollAllStats(7);
    const classChoice = getCharacterClass(stats);
    const output = formatOutput(stats, classChoice);
    return output;
  }

  return {
    getCharacter:   getCharacter,
  };

}());

module.exports = character;
