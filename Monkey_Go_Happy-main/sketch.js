var backImage,backgr;
var player, player_running;
var ground,ground_img;
var banana, bananaImage, bananaGroup;
var obstacle, stoneImage;
var score;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("images/jungle.jpg");
  player_running = loadAnimation("images/Monkey_01.png","images/Monkey_02.png","images/Monkey_03.png","images/Monkey_04.png","images/Monkey_05.png","images/Monkey_06.png","images/Monkey_07.png","images/Monkey_08.png","images/Monkey_09.png","images/Monkey_10.png");
  bananaImage = loadImage("images/banana.png");
  stoneImage = loadImage ("images/stone.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background(0);

  spawnFood();
  spawnObstacles();
  if(gameState===PLAY){

    
  
    if(backgr.x<10){
      backgr.x=backgr.width/3;
    }

    camera.position.x = player.x;
    camera.position.y = player.y - 90;
    
    if(keyDown("space") ) {
      player.velocityY = -12;
    }

    player.velocityY = player.velocityY + 0.8;
    player.collide(ground);

  }

  drawSprites();
}

function spawnFood(){
  var rand = Math.round(random(180,450));
  if (frameCount % 80 === 0) {
    banana = createSprite(800,rand,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -10;
    

    banana.lifetime = 610;

    // bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  var rand1 = Math.round(random(230, 270));
  var rand2 = Math.round(random(80, 120));
  if (frameCount % rand1 === 0) {
    obstacle = createSprite(800,310,40,10);
    obstacle.addImage(stoneImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -4;
    

    obstacle.lifetime = 210;

    // obstaclesGroup.add(obstacle);
  }
  if (frameCount % rand2 === 0) {
    obstacle = createSprite(800,310,40,10);
    obstacle.addImage(stoneImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -4;
    

    obstacle.lifetime = 210;

    // obstaclesGroup.add(obstacle);
  }
}