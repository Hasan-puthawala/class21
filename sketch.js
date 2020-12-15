var fixedRect, movingRect;
var obj1,obj2,obj3,obj4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;

  obj1 = createSprite(123,65, 80, 52);
  obj1.shapeColor = "yellow";
  
  obj2 = createSprite(465,45, 80, 54);
  obj2.shapeColor = "red";

  obj3 = createSprite(654,156, 260, 90);
  obj3.shapeColor = "orange";

  obj4 = createSprite(400,600, 125, 52);
  obj4.shapeColor = "yellow";
  
  obj4.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(obj4, fixedRect);
 
  drawSprites();
}

function bounceOff(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
    }
}