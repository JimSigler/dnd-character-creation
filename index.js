const _ = require('underscore');
const diceRoller = require('./src/models/diceRoller');
const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.status(404).send("Sorry, nothing to see here.");
})

app.get('/dice', function(req, res){
  res.status(500).send({error: "Please specify the number of dice."});
})

app.get('/dice/:diceCount', function(req, res){
  let dice = new diceRoller();
  dice.withCount(req.params.diceCount).ofSize(20).rollDice();
  res.json(dice.values());
})

app.get('/dice/:diceCount/sides', function(req,res){
    res.status(500).send({error: "Please specify the size of the dice to roll."});
})

app.get('/dice/:diceCount/sides/:sideCount', function(req, res){
  if(req.params.diceCount < 0 || req.params.sideCount < 0){
    res.status(500).send({error: 'The dice count and size of the dice must be positive integers.'})
  }
  else{
    let dice = new diceRoller();
    dice.withCount(req.params.diceCount).ofSize(req.params.sideCount).rollDice();
    res.json(dice.values());
  }
})

// ******************
// /character creates a random character and returns a JSON object
// with the character stats and recommended character class
// ******************
app.get('/character/new', function(req, res){
  let character = new require('./src/models/character')();
  let char = character.getCharacterJSON();
  console.log(`Existing character: \tStats: ${JSON.stringify(char.character.stats)} \tClass: ${char.character.class}`);
  
  res.json(char);
})

app.listen(3004, function(){
  console.log("Listening on port 3004!");
})
