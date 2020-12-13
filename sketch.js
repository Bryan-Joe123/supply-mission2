var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var left, right, bottom ,leftSprite, rightSprite, bottomSprite;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	// Create a Ground
	bottom = Bodies.rectangle(width/2, 650, 200, 20, {isStatic:true} );
	World.add(world, bottom);
    bottomSprite=createSprite(width/2, 650, 200, 20)
	
	left = Bodies.rectangle(300, 600, 20, 100, {isStatic:true} );
	World.add(world, left);
	leftSprite=createSprite(300, 600, 20, 100)
	
	right = Bodies.rectangle(500, 600, 20, 100, {isStatic:true} );
	World.add(world, right);
    rightSprite=createSprite(500, 600, 20, 100)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	
	 
	// ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	// World.add(world, ground);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false)
  }
}



