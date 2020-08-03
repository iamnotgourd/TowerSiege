const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MConstraint = Matter.MouseConstraint
const Mouse = Matter.Mouse


var engine, world;

function setup() {
 const canvas = createCanvas(2000,800);
  engine = Engine.create();
  world = engine.world;
  
  base1 = new Platform(1327,665,400,10)
  //row 1
  block1 = new Block(1205 ,520,80,80) 
  block2 = new Block(1285,520,80,80)
  block3 = new Block(1365,520,80,80)
  block4 = new Block(1445,520,80,80)
  ball = new Ball(340,240,40)
  const mouse = Mouse.create(canvas.elt)
  var options = {
    mouse:mouse
  }
  mConstraint = MConstraint.create(engine,options)
  World.add(world,mConstraint)
  rubberband = new Band(ball.body,{x:222,y:175})
}

function draw() {
  background("black");  
  Engine.update(engine);
  base1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
 // rubberband.display()
  ball.display()
  drawSprites();
  console.log(mouseX)
  console.log(mouseY)
}