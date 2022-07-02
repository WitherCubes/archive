var fixRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() 
{
  createCanvas(1200,800);
  fixRect=createSprite(200, 200, 50, 80);
  fixRect.shapeColor="green";
  fixRect.debug=true;

  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  gameObject1=createSprite(100, 300, 30, 60);
  gameObject1.shapeColor="green";

  gameObject2=createSprite(500, 450, 70, 50);
  gameObject2.shapeColor="green";

  gameObject3=createSprite(300, 100, 20, 60);
  gameObject3.shapeColor="green";

  gameObject4=createSprite(600, 70, 100, 40);
  gameObject4.shapeColor="green";
}

function draw() {
  background(0,0,0);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

 if(isTouching(movingRect, gameObject1))
  {
  movingRect.shapeColor="blue";
  gameObject1.shapeColor="blue";
  }
 
  else
  {
  movingRect.shapeColor="yellow";
  gameObject1.shapeColor="yellow";
  }

  bounceOff(movingRect, fixRect);
  
  drawSprites();

}