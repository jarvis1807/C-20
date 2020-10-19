var movingRect,fixedRect;

function setup() {
  createCanvas(400,400);
  movingRect = createSprite(400, 200, 90, 50);

  movingRect.shapeColor = "blue";
  movingRect.velocityX = -5


  fixedRect = createSprite(150,200,50,80);
  fixedRect.velocityX = 5
  fixedRect.shapeColor = "blue"
}

function draw() {
  background("black");  
  /*movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";

    
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }*/
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
      movingRect.velocityX = movingRect.velocityX*(-1)
      fixedRect.velocityX = fixedRect.velocityX*(-1)
      

    }
      if( movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
        && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
          movingRect.velocityY= movingRect.velocityY*(-1)
          fixedRect.velocityY = fixedRect.velocityY*(-1)


        }
  
  console.log(movingRect.x - fixedRect.x);

  drawSprites();
}