var dog,dogImage,happydogImage;

function preload()
{
  dogImage=loadImage("images/dogImg.png");
  happydogImage=loadImage("images/dogImg1.png");
}
function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  foodStock.set(20);

  dog=createSprite(250,350,10,60);
  dog.addImage(dogImage);
  dog.scale=0.2;
}


function draw() {  
  background("green");
  if(food!==undefined){
    textSize(20);
    fill(255);
    text("Note:Press UP ARROW to feed DRAGO milk");
    text("food Remaining:",food,150,150);

    if(keyWentDown(UP_ARROW)){
      writeStock(food);
      dog.addImage(happydogImage);
    }
    if(keyWentUp(UP_ARROW)){
      dog.addImage(dogImage);
    }
    if(food===0){
      food=20;
    }
  }
  drawSprites();

}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
}

function readStock(){
   if(x<=0){
     x=5;
   }else{
     x=x+1;
   }
}

