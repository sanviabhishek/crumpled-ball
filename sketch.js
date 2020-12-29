
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bucket1, bucket2, bucket3, ground,paper;
var paperImage, dustbinImage;

function preload()
{
	dustbinImage=loadImage("dustbingreen.png");
	paperImage=loadImage("paper.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,height,1200,20);
	bucket1=new Dustbin(759, 655,20,100);
	bucket2=new Dustbin(700, height, 100,20);
	//bucket2.addImage("dustbin", dustbinImage);
	bucket3=new Dustbin(639, 655,20,100);
	paper=new Paper(20,650,50,50);
	//paper.addImage("paper",paperImage);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	
	//image(paperImage,700)
	image("dustbinImage",700,height);
  rectMode(CENTER);
  background(255);
  
  ground.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
  paper.display();
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}



