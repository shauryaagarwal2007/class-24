
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1= new WALL(400, 460, 200,20);
	side2= new WALL(290, 420, 20,100);
	side3= new WALL(510, 420, 20,100);

	ground1=new GROUND(400,470,800,20)

	paper= new Ball(50,120,20)
	 
	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  side1.display();
  side2.display();
  side3.display(); 

  paper.display();

  ground1.display();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:140})
	}
}