const _=require('underscore');
const diceRoller = require('./models/diceRoller').DiceRoller;
const express=require('express');
const app=express();

var character = require('./models/character');

app.get('/', function(req, res){
  res.status(404).send("Sorry, nothing to see here.");
})

app.get('/dice', function(req, res){
  res.status(500).send({error: "Please specify the number of dice."});
})

app.get('/dice/:diceCount', function(req, res){
  var dice = new diceRoller(req.params.diceCount, 20);
  dice.rollDice();
  res.json(dice.getInfo());
})

app.get('/dice/:diceCount/sides', function(req,res){
    res.status(500).send({error: "Please specify the size of the dice to roll."});
})

app.get('/dice/:diceCount/sides/:sideCount', function(req, res){
  if(req.params.diceCount < 0 || req.params.sideCount < 0){
    res.status(500).send({error: 'The dice count and size of the dice must be positive integers.'})
  }
  else{
    var dice = new diceRoller(req.params.diceCount, req.params.sideCount);
    dice.rollDice();
    res.json(dice.getInfo());
  }
})

// ******************
// /character creates a random character and returns a JSON object
// with the character stats and recommended character class
// ******************
app.get('/character', function(req, res){
  res.json(character.getCharacter());
})

app.listen(3004, function(){
  console.log("Listening on port 3004!");
})
