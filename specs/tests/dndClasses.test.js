const dndClasses = require('../../src/models/dndClasses').DnDClasses;

let theClass = "Fighter";
const anotherClass = new dndClasses();

test(`should have match ${theClass}`, () => {
  expect(anotherClass.getStat(theClass)).toBe("STR");
});

test('should give the proper class based on stat', () => {
  expect(anotherClass.getClass(3).name).toBe('Mage');
});

test('List of classes should contain the name rogue', () => {
  let theName;
  anotherClass.classList().forEach( (aClass) => {
    if(aClass.name === "Rogue"){
      theName = aClass.name;
    }
  });
  expect(theName).toBe("Rogue");
});

test('List of classes should contain elements', () => {
  expect(anotherClass.classList().length).toBeGreaterThan(0);
});
