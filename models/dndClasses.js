// **********
// This class is the object that encapsulates the D&D classes.
// It contains a list of classes as well as a list of the major
// stat that matters to that given class.
// **********


class DnDClasses{

  constructor(){
    this.theClassList = ["Fighter", "Rogue", "Paladin", "Mage", "Cleric", "Bard"];
    this.test = { 'Fighter':'STR', 'Rogue':'DEX' };
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
    return this.test[className];
  }

  getClass(stat){
    // **********
    // This returns the name of a class for a given stat.
    // **********
    return this.theClassList[stat];
  }

}

exports.DnDClasses = DnDClasses;
