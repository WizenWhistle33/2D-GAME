var Defender, Attacker,Attackerimg, Defenderimg;  
var gameState;
var backgroundImg;
var Bomb,Bombimg;

function preload(){
Attackerimg=loadAnimation("Drun1.png","Drun2.png","Drun3.png","Attacker4.png","Attacker6.png","Attacker7.png","Attacker8.png","Attacker9.png",
"Attacker10.png","Attacker11.png");
Defenderimg=loadAnimation("Defender1.png","Defender2.png","Defender3.png","Defender4.png")

backgroundImg=loadImage("map.jpg")

Bombimg=loadImage("bomb-removebg-preview.png")
}

function setup(){
  createCanvas(1200,800);
Attacker=createSprite(200,200,50,50);
Attacker.addAnimation("Attacker",Attackerimg);
Attacker.scale=0.3;
Defender=createSprite(300,300,50,50);
Defender.addAnimation("Defender",Defenderimg);
Defender.scale=0.3;

var gameState= Math.round(random(1,2)); //1 or 2
console.log(gameState)

}


function draw(){
  background(backgroundImg)
  
    if(keyDown("right")){
      Attacker.x=Attacker.x+2
    }
    if(keyDown("left")){
      Attacker.x=Attacker.x-2
    }
    if(keyDown("up")){
      Attacker.y=Attacker.y-2
    }
    if(keyDown("down")){
      Attacker.x=Attacker.y+2
    }
  if (keyDown("a")){
    Defender.x=Defender.x-5
  }

  if (keyDown("s")){
    Defender.y=Defender.y+5
  }

  if (keyDown("w")){
    Defender.y=Defender.y-5
  }

  if (keyDown("d")){
    Defender.x=Defender.x+5
  }
  
drawSprites();
}
