var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 100, 70);
  movingrect=createSprite(400,200,50,140);
  fixedrect.shapeColor=("yellow");
  movingrect.shapeColor=("yellow");
}

function draw() {
  background("pink");
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    fixedrect.shapeColor=("lightblue");
    movingrect.shapeColor=("lightblue");
  }
  else{
    
    fixedrect.shapeColor=("yellow");
    movingrect.shapeColor=("yellow");

  }
  drawSprites();
}