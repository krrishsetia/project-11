  var sea, seaimage, ship, shipimage;


function preload(){
    seaimage = loadImage("sea.png")
    shipimage = loadAnimation("ship-1.png","ship-2.png")
  }

function setup(){
  createCanvas(800,800);
  
  sea = createSprite(400,400,1,1)

  sea.addImage("sea", seaimage)

  ship = createSprite(400,400,10,10)

  ship.addAnimation("ship", shipimage)

  ship.scale = 0.5
}

function draw() {
  sea.velocityX = -4
  if (sea.x < 0) {
    sea.x = sea.width/2
  }
  background("blue");
 drawSprites()
}