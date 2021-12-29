const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var solo;
var caixa;


function setup() {
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
   
  var solo_options = {
    isStatic: true,
  };

 solo = Bodies.rectangle(200, 400, 400, 50, solo_options);
  World.add(world, solo);
 caixa = new box (200,200,50,50);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(solo.position.x, solo.position.y, 400, 50);
 caixa.display()
}
