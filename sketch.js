
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var paper1;
var ground;
var dustbin1,dustbin2,dustbin3,
engine = Engine.create();
function setup() {
	createCanvas(800, 700);

	
	world = engine.world;
	paper1=new Paper (200,30,20);
	
ground=new Ground(400,670,800,15);
dustbin1=new Dustbin(700,590,16,150);
//dustbin1.shapeColor="white";
dustbin2=new Dustbin(540,590,16,150);
//dustbin2.shapeColor="orange";
dustbin3=new Dustbin(620,660,150,15);
//dustbin3.shapeColor="red";
Engine.run(engine);
}






function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  


paper1.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:14,y:-14});
	}
}



