
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bob1 = new Bob(200,600,100);
	bob2 = new Bob(300,600,100);
	bob3 = new Bob(400,600,100);
	bob4 = new Bob(500,600,100);
	bob5 = new Bob(600,600,100);                               

	roof = new Roof(400,150,500,30);

	rope1 = new rope(bob1.body,roof.body, -bob1Diameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  
  drawSprites();
 
}



