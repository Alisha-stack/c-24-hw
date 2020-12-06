
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball,ball1;
var box1,box2,box3;
var ox1,ox2,ox3,bol;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow";

//ball1=createSprite(200,200,20);
//ball1.shapeColor="purple";
	
	box1=createSprite(350,650,200,20);
	box2=createSprite(440,600,20,100);
	box3=createSprite(260,600,20,100);
	
	box2.shapeColor="white";
	box1.shapeColor="white";
	box3.shapeColor="white";
	// ball1.shapeColor="purple";
	ox1= Bodies.rectangle(650, 650, 200, 20,{isStatic:true});
	
	ox2= Bodies.rectangle(760, 630, 20, 100);
	ox3= Bodies.rectangle(540, 630, 20, 100);
	
	
	ball1=Bodies.circle(110,640,50,{isStatic:false});
	fill(255,0,255);
	// ball1.setAngle(PI/2)
	// push();
    // translate(ball1.position.x,ball1.position.x);
    // rotate(angle);
	World.add(world,ball1);
	// pop();
	
	World.add(world,ox1);
	World.add(world,ox2);
	World.add(world,ox3);
	
	
	
	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  //ball1.display();
  box1.x=ox1.position.x
  box1.y=ox1.position.y
  box2.x=ox2.position.x
  box2.y=ox2.position.y
  box3.x=ox3.position.x
  box3.y=ox3.position.y
 
  ellipse(ball1.position.x,ball1.position.y,30);
  //var ball1_options={
	
	
	// friction:0.5,
	// density:1.2
 keyPressed();
 
	drawSprites();
}
 // ball1.shapeColor="purple";
 
 


function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball1.body,ball1.position.x,{x:105,y:-105})


}


}
