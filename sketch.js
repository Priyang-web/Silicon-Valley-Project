var gameState = "play";
var bgimg;
var stickMan,stickimg,jumping;
var startPoint,startimg;
var blueBox,blueimg;
var grassobstacle1,grassimg,grassobstacle2,grassobstacle3,grassobstacle5,grassobstacle6,grassobstacle7,grassobstacle8,grassobstacle9,grassobstacle10,grassobstacle11,grassobstacle12;
var endplank,endplankimg;
var topEdge,bottomEdge,rightEdge,leftEdge;
var wow,fail,bgsound;

function preload(){
bgimg = loadImage("images/last bg.jpg");
stickimg = loadAnimation("images/stick man.png");
jumping = loadAnimation("images/jumping123.png");
startimg = loadImage("images/woddenplank.png");
blueimg = loadImage("images/blueBox.png");
grassimg = loadImage("images/grassobstacle.png");
endplankimg = loadImage("images/end_plank.png");
wow = loadSound("sounds/wow_2.mp3");
fail = loadSound("sounds/fail-sound-effect.mp3")
bgsound = loadSound("sounds/Positive-Hip-Hop.mp3")
}

function setup(){
createCanvas(1850,1100)

bgsound.loop();


// bg = createSprite(925,550);
//  bg.addImage("gb", bgimg);
// bg.scale = 3.1; 

topEdge = createSprite(925,0,1850,10);
bottomEdge = createSprite(925,1100,1850,10);
rightEdge = createSprite(0,550,10,1100);
leftEdge = createSprite(1850,550,10,1100);

startPoint = createSprite(90,900);
startPoint.addImage("start",startimg);

startPoint.setCollider("rectangle",0,0,150,30);
// startPoint.debug = true;

endplank = createSprite(1750,250);
endplank.addImage("end",endplankimg);
endplank.scale = 0.55;
endplank.setCollider("rectangle",0,0,300,100);
// endplank.debug = true;

blueBox = createSprite(1790,170);
blueBox.addImage("white",blueimg);
blueBox.scale = 0.3;
blueBox.setCollider("rectangle",0,0,200,200);
// blueBox.debug = true;

stickMan = createSprite(85,810);
stickMan.addAnimation("stick",stickimg);
stickMan.addAnimation("jumping",jumping);
stickMan.scale = 0.35;
stickMan.setCollider("rectangle",0,0,100,500);
// stickMan.debug = true;

grassobstacle1 = createSprite(380,760);
grassobstacle1.addImage("grass1",grassimg);
grassobstacle1.scale = 0.5;
grassobstacle1.setCollider("rectangle",0,-60,370,80);
// grassobstacle1.debug = true;

grassobstacle2 = createSprite(650,920);
grassobstacle2.addImage("grass2",grassimg);
grassobstacle2.scale = 0.5;
grassobstacle2.velocityX=-5;
grassobstacle2.setCollider("rectangle",0,-60,370,80);
// grassobstacle2.debug = true;

grassobstacle3 = createSprite(1050,740);
grassobstacle3.addImage("grass3",grassimg);
grassobstacle3.scale = 0.5;

grassobstacle3.setCollider("rectangle",0,-60,370,80);
// grassobstacle3.debug = true;

// grassobstacle4 = createSprite(1350,930);
// grassobstacle4.addImage("grass4",grassimg);
// grassobstacle4.scale = 0.5;
// grassobstacle4.setCollider("rectangle",0,0,200,150);
// grassobstacle4.debug = true;

grassobstacle5 = createSprite(700,600);
grassobstacle5.addImage("grass5",grassimg);
grassobstacle5.scale = 0.5;
grassobstacle5.velocityX=-5;
grassobstacle5.setCollider("rectangle",0,-60,370,80);
// grassobstacle5.debug = true;

grassobstacle6 = createSprite(1740,750);
grassobstacle6.addImage("grass6",grassimg);
grassobstacle6.scale = 0.5;
grassobstacle6.setCollider("rectangle",0,-60,370,80);
// grassobstacle6.debug = true;

grassobstacle7 = createSprite(1450,600);
grassobstacle7.addImage("grass7",grassimg);
grassobstacle7.scale = 0.5;
grassobstacle7.velocityX=-5;
grassobstacle7.setCollider("rectangle",0,-60,370,80);
// grassobstacle7.debug = true;

grassobstacle8 = createSprite(1350,930);
grassobstacle8.addImage("grass8",grassimg);
grassobstacle8.scale = 0.5;
grassobstacle8.velocityX=-5;
grassobstacle8.setCollider("rectangle",0,-60,370,80);
// grassobstacle8.debug = true;

grassobstacle9 = createSprite(300,400);
grassobstacle9.addImage("grass9",grassimg);
grassobstacle9.scale = 0.5;
grassobstacle9.setCollider("rectangle",0,-60,370,80);
// grassobstacle9.debug = true;

grassobstacle10 = createSprite(1050,400);
grassobstacle10.addImage("grass10",grassimg);
grassobstacle10.scale = 0.5;
grassobstacle10.setCollider("rectangle",0,-60,370,80);
// grassobstacle10.debug = true;

grassobstacle11 = createSprite(700,250);
grassobstacle11.addImage("grass11",grassimg);
grassobstacle11.scale = 0.5;
grassobstacle11.setCollider("rectangle",0,-60,370,80);
// grassobstacle11.debug = true;

grassobstacle12 = createSprite(1600,400);
grassobstacle12.addImage("grass12",grassimg);
grassobstacle12.scale = 0.5;
grassobstacle12.velocityX=-5;
grassobstacle12.setCollider("rectangle",0,-60,370,80);
// grassobstacle12.debug = true;



}
function draw(){
  background(bgimg); 
  
  
   if(gameState === "play"){
    
  stickMan.changeAnimation("stick",stickimg);


  // stickMan.bounceOff(grassobstacle1);
  stickMan.collide(topEdge);
  stickMan.collide(bottomEdge);
  stickMan.collide(rightEdge);
  stickMan.collide(leftEdge);

if(keyDown("space")){
 stickMan.velocityY=-7;
 stickMan.x=stickMan.x + 5;
 stickMan.changeAnimation("jumping",jumping);
}
stickMan.velocityY = stickMan.velocityY+3;

stickMan.depth = grassobstacle1.depth;
stickMan.depth +=1;

stickMan.depth = grassobstacle2.depth;
stickMan.depth +=1;

stickMan.depth = grassobstacle3.depth;
stickMan.depth +=1;

stickMan.depth = grassobstacle5.depth;
stickMan.depth +=1;

stickMan.depth = grassobstacle6.depth;
stickMan.depth +=1;

stickMan.depth = grassobstacle7.depth;
stickMan.depth +=1;

stickMan.depth = grassobstacle8.depth;
stickMan.depth +=1;

stickMan.depth = grassobstacle9.depth;
stickMan.depth +=1;

stickMan.depth = grassobstacle10.depth;
stickMan.depth +=1;

stickMan.depth = grassobstacle11.depth;
stickMan.depth +=1;

stickMan.depth = grassobstacle12.depth;
stickMan.depth +=1;

// if(keyDown("RIGHT_ARROW")){
//   stickMan.x=stickMan.x + 5;
//  }
 if(keyDown("LEFT_ARROW")){
  stickMan.x=stickMan.x - 5;
 }

if(blueBox.isTouching(stickMan)){
    background(0);
   stroke("yellow");
   fill("yellow");
   textSize(200);
   text("YOU WIN", 400,500);
   stickMan.visible = false;
   startPoint.visible = false;
   endplank.visible = false;
   grassobstacle1.visible = false;
   grassobstacle2.visible = false;
   grassobstacle3.visible = false;
   grassobstacle5.visible = false;
   grassobstacle6.visible = false;
   grassobstacle7.visible = false;
   grassobstacle8.visible = false;
   grassobstacle9.visible = false;
   grassobstacle10.visible = false;
   grassobstacle11.visible = false;
   grassobstacle12.visible = false;
   blueBox.visible = false;
  //  wow.play();

 }

 if(grassobstacle7.x < 1250){
   grassobstacle7.velocityX = 5;
 }
 if(grassobstacle7.x > 1550){
  grassobstacle7.velocityX = -5;
}

if(grassobstacle5.x < 600){
  grassobstacle5.velocityX = 5;
}
if(grassobstacle5.x > 800){
  grassobstacle5.velocityX = -5;
}

if(grassobstacle8.x < 1150){
  grassobstacle8.velocityX = 5;
}
if(grassobstacle8.x > 1450){
  grassobstacle8.velocityX = -5;
}
if(grassobstacle2.x < 850){
  grassobstacle2.velocityX = 5;
}
if(grassobstacle2.x > 1150){
  grassobstacle2.velocityX = -5;
}
if(grassobstacle12.x < 1500){
  grassobstacle12.velocityX = 5;
}
if(grassobstacle12.x > 1650){
  grassobstacle12.velocityX = -5;
}

stickMan.collide(startPoint);
stickMan.collide(endplank);
stickMan.collide(grassobstacle1);
stickMan.collide(grassobstacle2);
stickMan.collide(grassobstacle3);
stickMan.collide(grassobstacle5);
stickMan.collide(grassobstacle6);
stickMan.collide(grassobstacle7);
stickMan.collide(grassobstacle8);
stickMan.collide(grassobstacle9);
stickMan.collide(grassobstacle10);
stickMan.collide(grassobstacle11);
stickMan.collide(grassobstacle12);
blueBox.collide(endplank);
 if(stickMan.y > 1000){
  gameState = "end";
  stickMan.x=85;
  stickMan.y=810;
}

drawSprites();
} 
if(gameState === "end"){

  //   stickMan.destroy();
  // startPoint.destroy();
  // endplank.destroy();
  // grassobstacle1.destroy();
  // grassobstacle2.destroy();
  // grassobstacle3.destroy();
  // grassobstacle5.destroy();
  // grassobstacle6.destroy();
  // grassobstacle7.destroy();
  // grassobstacle8.destroy();
  // grassobstacle9.destroy();
  // grassobstacle10.destroy();
  // grassobstacle11.destroy();
  // grassobstacle12.destroy();
  // blueBox.destroy();
  background(0);
  stroke("yellow");
  fill("yellow");
  textSize(200);
  text("Game Over", 400,500);
   textSize(95)
    text("Press 'R' to Restart", 500,700 );
  

  if(keyDown("R")){
    reset();
  }
    
    // fail.play();
}

  
}
function reset(){
  gameState = "play";
}
