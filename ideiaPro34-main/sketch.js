
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world
var paperObJ;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	//chame o objeto dustbin(cesta) e posicione
	dustbinObj = new dustbin (1400,500 )
	//chame o objeto paperObJ e posicione 
	paperOBJ = new paper (100,650,70 )

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); Engine.run(engine); Render.run(render);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  //chame o metodo display para  dustbinObj e  paperObJ
  dustbinObj.display()
  paperOBJ.display()
  
}

function keyPressed(){
	//escolha uma tecla para lancar a bola na cesta
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paperOBJ.body, paperOBJ.body.position, {x: 78, y: -75});
	}
}

