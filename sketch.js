
var a,b;

function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  a.shapeColor = "red";
  b = createSprite(600, 200, 80, 30);
  b.shapeColor = "red";

  b.velocityY = 5;
  a.velocityY = -5;
}

function draw() {
  background("blue");  

  
  bounceOff(a,b);
  
  
  
  
  

  
  drawSprites();
}