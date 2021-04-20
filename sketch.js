var Ship;
var Alien1;
var Alien2;
var Alien3;
var Alien4;
var Alien1img, Alien2img, Alien3img, Alien4img, SpaceShipimg,Laserimg,Laser;
var AliensG1,AliensG2,AliensG3,AliensG4,LaserG;
var ALIEN;
var gameStart,gameStartimg;
var gameOver,gameOverimg;
var gameState="initial";
var Score=0;
var highScore=0;
var restart,restartimg;




function preload(){
Alien1img=loadImage('Images/Alien1new.png');
Alien2img=loadImage('Images/Alien2-new.png');
Alien3img=loadImage('Images/Alien3-new.png');
Alien4img=loadImage('Images/Alien4-new.png');
SpaceShipimg=loadImage('Images/SpaceShip-new.png');
Laserimg=loadImage('Images/Laserimg2.png');
gameStartimg=loadImage('Images/Gamestartimg.png');
gameOverimg=loadImage('Images/Gameoverimg.png');
restartimg=loadImage('Images/Restartimg.png');
}

function setup(){
createCanvas(700,700);
Ship=createSprite(300,630);
Ship.addImage(SpaceShipimg);
Ship.scale=0.2;

AliensG1=new Group();
AliensG2=new Group();
AliensG3=new Group();
AliensG4=new Group();
ALIEN=new Group();
LaserG=new Group();
gameStart=createSprite(300,350);
gameStart.addImage(gameStartimg);
gameOver=createSprite(300,350);
gameOver.addImage(gameOverimg);
gameOver.visible=false;
restart=createSprite(650,300);
restart.addImage(restartimg);
restart.scale=0.1;
restart.visible=false;
}


function draw(){
background(0);


if(gameState==="initial"&& keyDown("space") ){
    


gameState="play";

}
if(gameState==="play"){
    gameStart.visible=false;



Ship.x=mouseX;
textSize(20);
fill("Yellow");
text("Score:"+Score,600,50);




Aliens1(); 
Aliens2();
Aliens3();
Aliens4(); 
if(keyDown("SPACE")){
    Laser1();
     
  } 

  for(var i=0; i<ALIEN.length; i++){
      if(ALIEN.get(i).isTouching(LaserG)){
          ALIEN.get(i).destroy();
          Score=Score+1;
      }
  }
  for(var i=0; i<ALIEN.length; i++){
    if(ALIEN.get(i).y>700){
       // ALIEN.get(i).destroy();
        gameState="End";
    }
}
}
if(gameState==="End"){
   
        //Ship.visible=false;
        LaserG.destroyEach();
        ALIEN.destroyEach();
        gameOver.visible=true;
        if(Score>highScore){
            highScore=Score;
        }
        textSize(20);
fill("Yellow");
text("Score:"+Score,325,150);
text("HighScore:"+highScore,300,200)
  restart.visible=true;
  if(mousePressedOver(restart)){
      gameState="play";
      gameOver.visible=false;
     Ship.visble=true;
     Score=0; 
  }      
}
drawSprites();
}
function Laser1()
{

    
Laser=createSprite(300,600);
Laser.addImage(Laserimg);
Laser.scale=0.1;
Laser.x=Ship.x;

Laser.velocityY=-4;
LaserG.add(Laser);   
        
}




function Aliens1(){
    if(frameCount %200===0){
    
        
    Alien1=createSprite(random(50,650),random(0,200));
    Alien1.addImage(Alien1img);
    Alien1.scale=0.1;
    
    Alien1.velocityY=2;
    AliensG1.add(Alien1);
    ALIEN.add(Alien1);

}
    }
  

function Aliens2(){
    if(frameCount %240===0){
    
        
    Alien2=createSprite(random(50,650),random(0,200));
    Alien2.addImage(Alien2img);
    Alien2.scale=0.1;
    
    Alien2.velocityY=2;
    ALIEN.add(Alien2);
    AliensG2.add(Alien2);
    }
   
}
function Aliens3(){
    if(frameCount %280===0){
    
        
    Alien3=createSprite(random(50,650),random(0,200));
    Alien3.addImage(Alien3img);
    Alien3.scale=0.1;
    
    Alien3.velocityY=2;
    ALIEN.add(Alien3);
    AliensG3.add(Alien3);
    }
   
}
function Aliens4(){
    if(frameCount %320===0){
    
        
    Alien4=createSprite(random(50,650),random(0,200));
    Alien4.addImage(Alien4img);
    Alien4.scale=0.1;
    
    Alien4.velocityY=2;
    ALIEN.add(Alien4);
    AliensG4.add(Alien4);
    }
    
}            