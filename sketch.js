
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ground;
let obs;
let obs2;
let ball,ball_resis

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	let options = {
		isStatic:true
	};

	var ball_resis = {
		restitution:0.95
	};
	
	fill("white");
	ball = Bodies.circle(200,200,20,ball_resis);
	World.add(world, ball);
	  
	fill("yellow");
	ground =  Bodies.rectangle(400,690,800,40, options);
	World.add(world,ground);

	fill("yellow");
	obs =  Bodies.rectangle(600,630,20,100, options);
	World.add(world,obs);

	fill("yellow");
	obs2 =  Bodies.rectangle(700,630,20,100, options);
	World.add(world,obs2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  if (keyDown("right_arrow")) {
	  hforce(0);
  }

  background(0);
  rect(ground.position.x,ground.position.y,800,20);
  rect(obs.position.x,obs.position.y,20,100);
  rect(obs2.position.x,obs2.position.y,20,100);
  ellipse(ball.position.x,ball.position.y,40,40)
  drawSprites();
 
}

function hforce() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.013,y:0})
}



