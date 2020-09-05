const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var woman_image;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder, thunder2;
var umbrella;


function preload(){
    woman_image = loadImage("images/woman.PNG");
    thunder = loadImage("images/thunder.PNG");
    thunder2 = loadImage("images/thunder 2.PNG");
}

function setup() {
  createCanvas(500,500);
  rainGroup = createGroup();
  engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella;
    
  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Raindrop(random(0,400),random(0,400),8,8));
     }
    }
}

function draw() {
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%60===0){
   var thunderCreatedFrame = frameCount;
   var thunder = createSprite(random(10,370),random(10,30),10,10);
   switch(rand){
     case 1 : thunder.addImage(thunder);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     default : break;
   }
   thunder.scale = random(1.5,2.5);

   if(thunderCreatedFrame +10 === frameCount&& thunder){
      thunder.destroy();
   }
  }
  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
  
  drawSprites();
}
