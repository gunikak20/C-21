var fixedRect , movingRect;
var gameObject1,gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1000,600);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.debug = true;
  movingRect.shapeColor = "green";
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "yellow";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "yellow";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "yellow";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "yellow";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
if (istouching(movingRect,gameObject4)){
  movingRect.shapeColor="peach"
  gameObject4.shapeColor="peach"
}
else{
  movingRect.shapeColor="cyan"
  gameObject4.shapeColor="cyan"
}
    drawSprites();
}
  function istouching(object1,object2){
    if(object1.x-object2.x <= object1.width/2+object2.width/2&&
      object2.x-object1.x <=object1.width/2+object2.width/2
      && object1.y-object2.y <=object1.height/2+object2.height/2&&
      object2.y-object1.y <=object1.height/2+object2.height/2){
       return true;
    }
    else {
     return false;
    }

  }