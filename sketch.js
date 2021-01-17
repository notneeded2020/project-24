
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	binLeft = new Bin (700,640,5,50);
	binRight = new Bin (720,640,5,50);
	binBase = new Bin (710,640,30,5);

	ground = new Ground ();

	paper = new CrumpledPaper(100,100,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  binLeft.display();
  binRight.display();
  binBase.display();

  paper.display();

  ground.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce (paper.body,paper.body.position,{x:85,y:-85})
	}
}

