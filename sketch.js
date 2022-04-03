var cactus,c1,c2,c3,c4,c5,c6
var cloud, cloud_image
var ground2
var ground, ground_image
var edges
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image=loadImage("ground2.png")
  cloud_image=loadImage("cloud.png")
  c1=loadImage("obstacle1.png")
  c2=loadImage("obstacle2.png")
  c3=loadImage("obstacle3.png")
  c4=loadImage("obstacle4.png")
  c5=loadImage("obstacle5.png")
  c6=loadImage("obstacle6.png")
}

function setup(){
    createCanvas(600,200)
    ground2=createSprite(200,190,400,10)
    //create a trex sprite
  trex=createSprite(50,185,20,20)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  edges = createEdgeSprites()
  
    ground=createSprite(200,185,400,10)
    ground.velocityX=-4
    ground.x=ground.width/2
    ground.addImage(ground_image)
    ground2.visible=false
}

function draw(){
  background("white")
  if(keyDown("space")&&trex.y>160){
    trex.velocityY = -10
  }
  if(ground.x<30){
    ground.x=ground.width/2
  }
  trex.velocityY = trex.velocityY + 0.8
  trex.collide(ground2)
  spawnClouds()
  spawnCac()
  drawSprites()
  
}
function spawnClouds(){
  if(frameCount%90==0){
    cloud=createSprite(600, 40, 25, 10)
    cloud.velocityX=-4
    cloud.y=Math.round(random(15, 60))
    cloud.addImage(cloud_image)
    trex.depth=cloud.depth
    trex.depth=trex.depth+1
    cloud.lifetime=150
  }

}
 
function spawnCac(){
  if(frameCount%60==0){
    cactus=createSprite(600,180,10,25)
    cactus.velocityX=-6
    var num=Math.round(random(1,6))
    switch(num){
      case 1:cactus.addImage(c1)
      break;
      case 2:cactus.addImage(c2)
      break;
      case 3:cactus.addImage(c3)
      break;
      case 4:cactus.addImage(c4)
      break;
      case 5:cactus.addImage(c5)
      break;
      case 6:cactus.addImage(c6)
      break;
      default:break
    }
    cactus.scale=.7
    cactus.lifetime=100
  }
}