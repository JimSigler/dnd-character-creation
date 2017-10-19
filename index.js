const _=require('underscore');
const diceRoller = require('./models/diceRoller').DiceRoller;
const express=require('express');
const app=express();

var character = require('./models/character');

app.get('/', function(req, res){
  res.send("hello world");
})

app.get('/dice', function(req, res){
  res.send("what?  How many dice?");
})

app.get('/dice/:diceCount', function(req, res){
  var dice = new diceRoller(req.params.diceCount, 20);
  dice.rollDice();
  res.send(`You asked for ${req.params.diceCount} dice:  \n ${dice.getTotal()}`);
})

app.get('/dice/:diceCount/sides', function(req,res){
    res.send("ok, so what size dice did you want to roll?");
})

app.get('/dice/:diceCount/sides/:sideCount', function(req, res){
  if(req.params.diceCount < 0 || req.params.sideCount < 0){
    res.send('The dice count and size of the dice must be positive integers.')
  }
  else{
    var dice = new diceRoller(req.params.diceCount, req.params.sideCount);
    dice.rollDice();
    res.send(`You rolled: ${dice.getTotal()}`);
  }
})

app.get('/character', function(req, res){
  var output = character.getCharacter();
  res.send(`${output}`);
})

app.listen(3004, function(){
  console.log("Listening on port 3004!");
})
