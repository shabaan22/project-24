const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron, rubber, hammer;
var sand1, sand2, sand3, sand4, sand5, sand6;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    square2 = new Square(600,300);
    square = new Square(300,150);
    rect1 = new Rect(230,250);
    sand1 = new Sand(200,350);
    sand2 = new Sand(100,350);
    sand3 = new Sand(250,450);
    sand4 = new Sand(150,550);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    square.display();
    square2.display();
    rect1.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
}