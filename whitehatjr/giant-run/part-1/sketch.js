var PLAY = 1;
var END = 0;
var gameState = PLAY;

var giant, giant_running, giant_collided;
var bg;
var obstacleGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;

var score = 0;

var gameOver, restart;

function preload() {
  giant_running = loadAnimation("sprites/giant1.png");
  giant_collided = loadAnimation ("sprites/giant2.png");

  obstacle1 = loadImage("sprites/house1.png");
  obstacle2 = loadImage("sprites/house2.png");
  obstacle3 = loadImage("sprites/house3.png");
  obstacle4 = loadImage("sprites/house4.png");
  obstacle5 = loadImage("sprites/house5.png");

  bg = loadImage("sprites/background.jpg");
  gameOverImg = loadImage("sprites/gameOver.png");
  restartImg = loadImage("sprites/restart.png");
}

function setup() {
  createCanvas(1350,600);

  giant = createSprite(100, 350, 50, 50);
  giant.addAnimation("running", giant_running);
  giant.addAnimation("collided", giant_collided);
  giant.scale = 0.7;

  gameOver = createSprite(650, 200);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;

  restart = createSprite(650, 300);
  restart.addImage(restartImg);
  restart.visible = false;

  obstacleGroup = new Group();

  score = 0;
}

function draw() {
  background(bg);
  fill("red");
  text("Score: " + score,1200,50);

  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 150 === 0) {
    var obstacle = createSprite(1350,380,50,50);
    //obstacle.velocityX = -(6 + 3*score/100);
    obstacle.velocityX = -3;

    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
      case 2: obstacle.addImage(obstacle2);
        break;
      case 3: obstacle.addImage(obstacle3);
        break;
      case 4: obstacle.addImage(obstacle4);
        break;
      case 5: obstacle.addImage(obstacle5);
        break;
      default: break;
    }

    obstacle.scale = 0.4;
    obstacle.lifetime = 500;

    obstacleGroup.add(obstacle);
  }
}