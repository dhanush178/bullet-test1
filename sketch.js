var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  bulletspeed=random(223,321);
  bulletweight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(200, 1000, 50, 50);
  bullet.shapeColor="blue";
  
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=50;
 
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
  
bullet.velocityX=0;
var damage=0.5*bulletweight*bulletspeed*bulletspeed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor="red";
}
if(damage<10){
  wall.shapeColor="green";
}

  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

