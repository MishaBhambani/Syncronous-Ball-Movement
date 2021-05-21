var hypnoticBall, database;
var position;
var stateStorage;
var playerCount = 0;
var form, player, game;
var playerData;


function setup(){
  database = firebase.database();
  createCanvas(1000,600);

  game = new Game();

  game.getState();
  game.start();
}

function draw(){
  background("white");

  if(playerCount === 2){
    game.updateState(1);
  }

  if(stateStorage === 1){
    clear();
    game.play();
  }
}