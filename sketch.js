const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var backgroundImg;
var boggie1,boggie2,boggie3,boggie4,boggie5,boggie6;
var chain1, chain2, chain3, chain4, chain5;
var rock1;
var sgimage;

var crash, start;

var collision, check=0;


function preload() {
 sgimage = loadImage ("images/bg.jpg");

 crash = loadSound ("sound/train.mp3");
 start = loadSound ("sound/train_crossing.mp3");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    myWorld = engine.world;


    ground = new Ground(600,380,1200,20);    

    boggie1= new Boggie(150,170,50,50);
    boggie2= new Boggie(250,170,50,50);
    boggie3= new Boggie(350,170,50,50);
    boggie4= new Boggie(450,170,50,50);
    boggie5= new Boggie(550,170,50,50);
    boggie6= new Boggie(650,170,50,50);

    chain1 = new Chain(boggie1.body,boggie2.body);
    chain2 = new Chain(boggie2.body,boggie3.body);
    chain3 = new Chain(boggie3.body,boggie4.body);
    chain4 = new Chain(boggie4.body,boggie5.body);
    chain5 = new Chain(boggie5.body,boggie6.body);

    rock1 = new Rock(1100,200,100,100)
}

function draw(){
    background(sgimage);

        // noStroke();
        // textSize(35)
        // fill("white")
        // text("Score  " + score, width-300, 50)
        
    Engine.update(engine);
    //strokeWeight(4);
  
    
    
    boggie1.show();
    boggie2.show();
    boggie3.show();
    boggie4.show();
    boggie5.show();
    boggie6.show();

    chain1.show();
    chain2.show();
    chain3.show();
    chain4.show();
    chain5.show();

    rock1.show();

    collision= Matter.SAT.collides(boggie6.body,rock1.body);
    if(collision.collided){
        check = 1;
    }

    if(check === 1){
        textSize(40);
        fill("blue");
        text("Crash",512,150);
        crash.play();
    }
}




function keyPressed(){

    if(keyCode === RIGHT_ARROW){
        Matter.Body.applyForce(boggie6.body,{x : boggie6.body.position.x, y : boggie6.body.position.y},{x: 0.5,y:0})
        start.play();
    }

}


