var dog,happyDog;
var database;
var foodStock,foodS,lastFed;
var dogImage,happyDogImage;
var changingGameState,readingGameState;

function preload(){
  DogImage = loadImage("dogImg.png");
  happyDogImage = loadImage("dogImg1.png");
}

function setup(){
  createCanvas(500,500);

  dog = createSprites(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.3;

  foodStock = database.ref('food');
  foodStock.on("value",readStock);

}

function draw(){
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }

  drawSprites();

  text("food remaining:",270,230);
  textSize(4);
  fill("blue");
}
