
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


var tree1, ground1, stone1, boyImage;
var mango1,mango2, mango3, mango4, mango5,mango6,mango7, mango8, mango9, mango10;

function preload()
{

	boyImage = loadImage("sprites/boy.png");
	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new ground();
	tree1 = new tree();
	stone1 = new stone();

	mango1 = new mango(650,300);
	mango2 = new mango(600,340);
	mango3 = new mango(570,350);
	mango4 = new mango(500,330);
	mango5 = new mango(700,360);

	mango6 = new mango(450,360);
	mango7 = new mango(590,220);
	mango8 = new mango(570,275);
	mango9 = new mango(490,380);
	mango10 = new mango(659,360);

	rope1 = new rope (stone1.body, {x:75,y:550});


	var render = Render.create({
		element: document.body,
		engine: engine,
		option: {
			width:800,
			 height:700,
			 wireframes: false
		}


	});



	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground1.display();
  tree1.display();


  image(boyImage,50,470,150,300);

  stone1.display();

  rope1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();


  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
  detectCollision(stone1, mango9);
  detectCollision(stone1, mango10);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.fly();
}

function keyPressed(){

	if(keyCode === 32){

		rope1.attach(stone1.body);

	}

}

function detectCollision(lstone,lmango){

	mangoPosition = lmango.body.position;
	stonePosition = lstone.body.position;
	var distance = dist(stonePosition.x,stonePosition.y, mangoPosition.x, mangoPosition.y);
	if(distance <= lmango.r+lstone.r){
		Body.setStatic(lmango.body, false); 
	}

}
