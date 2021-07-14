var bgImg, girl, girlImg;
var snowflake;
function setup() {
  createCanvas(1300,800);
  bgImg = loadImage("snow2.jpg");
  girlImg = loadImage("ski2.png");
  snowflake = new Snow(700,200,50,50);
}

function draw() {
  background(bgImg); 
  girl = createSprite(400,500,1,1);
  girl.addImage(girlImg);
  snowflake.display();
  keypressed();
  drawSprites();
}
function keypressed(){
  if(keyDown("RIGHT_ARROW")){
    girl.x = girl.x+20;
  } 
}