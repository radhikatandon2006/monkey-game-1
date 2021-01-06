var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var play=1;
var end=0;
var gamestate=play;
var survivalTime=0;
var invisibleGround;

function preload(){
monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,500);
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("monkeyimage",monkey_running);
monkey.scale=0.1;
 
ground = createSprite(400,350,900,10);
ground.x = ground.width/2;
console.log(ground.x);
ground.velocityX = -4;
  
invisibleGround = createSprite(400,350,900,10);
invisibleGround.visible = true;
  
FoodGroup = new Group();

obstacleGroup = new Group();
  
survivalTime=0;
  
}


function draw()   {
background("white");
  
if(gamestate===play) {
if(keyDown("space")) {
monkey.velocityY = -7;
}
  
monkey.velocityY = monkey.velocityY + 0.5;
  
monkey.collide(invisibleGround);
  
if (ground.x < 0){
ground.x = ground.width/2;
}
  
createobstacle();
createbanana();
  
  
  }
  

  
else if(gamestate===end) {
ground.velocityX=0; 
}
  

stroke("white"); 
textSize(20);
fill("white");
  
stroke("black");
textSize(20);  
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())  
text("survivalTime: "+survivalTime,100,50); 
  
  
  
  
drawSprites();
}

function createbanana() {
if(frameCount%80===0)       {
banana=createSprite(600,random(120,200),20,20);
banana.velocityX=-5;
banana.lifetime=200; 
banana.addImage("imageofbanana",bananaImage);
banana.scale=0.1;
} 
    }

function createobstacle()   {
if(frameCount%300===0) {
obstacle=createSprite(600,335,20,20);
obstacle.velocityX=-3;
obstacle.lifetime=200;
obstacle.addImage("imageofobstacle",obstaceImage);
obstacle.scale=0.1;
obstacleGroup.add(obstacle);
} 
   }







