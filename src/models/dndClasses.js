// **********
// This class is the object that encapsulates the D&D classes.
// It contains a list of classes as well as a list of the major
// stat that matters to that given class.
// **********


class DnDClasses{

  constructor(){
    this.theClassList = [
      {"name": "Fighter", "stat": "STR"},
      {"name": "Rogue", "stat": "DEX"},
      {"name": "Paladin", "stat": "CON"},
      {"name": "Mage", "stat": "INT"},
      {"name": "Cleric", "stat": "WIS"},
      {"name": "Bard", "stat": "CHA"}
    ];

    this.bestStats = {
      'Fighter':    'STR',
      'Rogue':      'DEX',
      'Paladin':    'CON',
      'Mage':       'INT',
      'Cleric':     'WIS',
      'Bard':       'CHAR',
    };
  }

  classList(){
    // **********
    // This returns the entire list of classes as an array.
    // **********
    return this.theClassList;
  }

  getStat(className){
    // **********
    // This returns the name of a stat for a given class.
    // **********
    return this.bestStats[className];
  }

  getClass(stat){
    // **********
    // This returns the name of a class for a given stat.
    // **********
    return this.theClassList[stat];
  }

}

exports.DnDClasses = DnDClasses;
