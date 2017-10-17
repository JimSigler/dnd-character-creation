var _=require('underscore');
var diceRoller = require('./models/diceRoller');
var express=require('express');
var app=express();

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
  res.send(`You asked for ${req.params.diceCount} dice. \n ${dice.getTotal()}`);
})

app.get('/dice/:diceCount/sides/:sideCount', function(req, res){
  var dice = new diceRoller(req.params.diceCount, req.params.sideCount);
  dice.rollDice();
  res.send(`You rolled: ${dice.getTotal()}`);
})

app.get('/character', function(req, res){
  var output = character.getCharacter();
  res.send(`${output}`);
})

app.listen(3004, function(){
  console.log("Listening on port 3004!");
})
