const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var  box1;
var box2, box3,box4,box5;
var ground1;
var puerquito,puerquito1;
var tronco,tronco2,tronco3,tronco4,tronco5;
var ave;
var back,plataform;

function preload(){
    back=loadImage("sprites/bg.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1= new Box(750,200,50,70);
    box2= new Box(900,200,50,70);
    box3= new Box(750,230,50,70);
    box4= new Box(900,230,50,70);
    box5= new Box(800,130,50,70);
   
    ground1= new ground(600,350,1200,20);
    plataform=new ground(150,305,300,170);
   
    puerquito=new pig(820,200);
    puerquito1=new pig(820,300);
    tronco= new log(820,150,200,PI/2);
    tronco2=new log(820,220,200,PI/2);
    tronco3=new log(810,100,120,PI/7);
    tronco4= new log(870,100,120,-PI/7);
    ave= new bird(100,100);


  
}

function draw(){
    background(back);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    puerquito.display();
    tronco.display();
    tronco2.display();
    tronco3.display();
    tronco4.display();
    puerquito1.display();
    ave.display();
    ground1.display();
    plataform.display();
    
    
}