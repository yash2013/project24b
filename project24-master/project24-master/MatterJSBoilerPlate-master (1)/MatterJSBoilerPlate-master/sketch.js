var dustbin,paperball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800,700);
    

	engine = Engine.create();
	world = engine.world;

	paper1=new Paper(620,100,30)
	box1=new Box(660,580,20,200)
	box2=new Box(500,580,20,200)
	box3=new Box(585,660,170,20)
	ground1=new Ground(400,690,800,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  paper1.display()
  ground1.display()
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

}	
}



