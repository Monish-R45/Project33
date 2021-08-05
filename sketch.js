const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine, world
var ice = []

var bg, bgimage
var snow
var Penguin, penguinimg
var black, blackimg
var maxSnow=120
function preload(){
  bgimage=loadImage("snow2.jpg")
  penguinimg=loadImage("charecters/penguin.png")
  blackimg=loadImage("charecters/penguin2.png")
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  penguin=createSprite(400,330)
  penguin.addImage(penguinimg)
  penguin.scale=0.5

  black=createSprite(300,330)
  black.addImage(blackimg)
  black.scale=0.5
if(frameCount%300===0){
  for (let i = 0; i<maxSnow; i++) {
    ice.push(new Snow(random(0,800),random(0,10),random(10,50)))
    
  }
}
}

function draw() {
  background(bgimage); 
  Engine.update(engine); 
  for (let i = 0; i < maxSnow; i++) {
    ice[i].display()
    ice[i].changepos();
  }
  



  drawSprites();
}