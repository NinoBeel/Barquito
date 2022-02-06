var edge;
var trex ,trex_running;
var ground

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");


}

function setup(){
  //edge=createEdgeSprite();
  createCanvas(600,200)
  trex =createSprite (50,180,20,50);
trex.addAnimation ("Running",trex_running);
trex.scale=.45;
trex.x =50;
ground = createSprite(300,185,600,10);
  //crear sprite de Trex
 

}
function draw(){

  background("white")
  console.log (trex.y);
  drawSprites();
if(keyDown("space")&& trex.y >= 100){
  trex.velocityY = -2
  
} trex.velocityY = trex.velocityY +0.8
trex.collide (ground);
}
