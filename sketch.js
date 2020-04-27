const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var ground;
var base1,base2,base3,cannon1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,20);

    base1 = new Base(100,380,100,20);
    base2 = new Base(100,360,100,20);
    base3 = new Base(100,335,50,30)


    cannon1 = new Cannon(140,325,100,40,-PI/7);
    

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    cannon1.display();
    base1.display();
    base2.display();
    base3.display();
    
    
}
