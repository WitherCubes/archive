//Taking constant values from matter.js to create my own world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Taking new variables for coding purpose as we can't change the constant
var engine, world;
var ground, ball;

function setup() {
  var canvas = createCanvas(400,400);
  //Creating the physics engine for our own engine variables
  engine = Engine.create();
  
  //Adding the engine in our world
  world = engine.world;
  
  //Making ground static
  var ground_options = {
    isStatic: true
  }

  //Creating ground using matter.js
  ground = Bodies.rectangle(200, 390, 400, 10, ground_options);
  //Adding the ground in my world
  World.add(world, ground);
  
  var ball_options = {
  restitution: 1.5
  }

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);

  }

function draw() {
  background(0);
  //Updating my engine with all the new objects
  Engine.update(engine);
  //Making the X and Y axis as the center for the rectangle
  rectMode(CENTER);
  //Drawing the ground
  rect(ground.position.x, ground.position.y, 400, 10);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}