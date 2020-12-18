var m , f;
var gameObject;
function setup() {
  createCanvas(1200,400);
  m = createSprite(200, 200, 50, 50);
  f = createSprite(400,200,80,30);
  m.shapeColor = "green";
  f.shapeColor = "green";
  m.debug = true;
  f.debug = true;
}

function draw() {
  background(0);
  m.x = World.mouseX;
  m.y = World.mouseY;

gameObject = createSprite(100,100,50,50);
gameObject.shapeColor = "green";

 if(isTouching(m,gameObject)){
  m.shapeColor = "red";
  gameObject.shapeColor = "red";
 }
 else{
  m.shapeColor = "green";
  gameObject.shapeColor = "green";
 }
  
  
  drawSprites();
}

