var alex, alexImg;
var z1, z2, z3, z4, z5;
var z1Img, z2Img, z3Img, z4Img, z5Img

function preload(){

  // z1Img = loadImage("assets/z1.png");
  // z2Img = loadImage("assets/z2.png");
  // z3Img = loadImage("assets/z3.png");
  // z4Img = loadImage("assets/z4.png");
  // z5Img = loadImage("assets/z5.png");
  // alexImg = loadImage("assets/alex.png")
}

function setup() {
    createCanvas(1500,700);

    alex = createSprite(50,50,100,100);
    // alex.addImage("Player", alexImg);
    alex.scale = 0.2;

    z1 = createSprite(1400,200,20,20);
    // z1.addImage("Zombie 1", z1Img);
    z1.scale = 0.2

    z2 = createSprite(1400,300,20,20);
    // z2.addImage("Zombie 2", z2Img);
    z2.scale = 0.12;

    z3 = createSprite(1400,400,20,20);
    // z3.addImage("Zombie 3", z3Img);
    z3.scale = 0.15;

    z4 = createSprite(1400,500,20,20);
    //z4.addImage("Zombie 4", z4Img);
    z4.scale = 0.11;

    z5 = createSprite(1400,600,20,20);
    //z5.addImage("Zombie 5", z5Img);
    z5.scale = 0.2;

}

function draw(){
    background("#654321")

    if(keyDown("down")){
      alex.y=alex.y+2;
    }

    drawSprites();
}
