const Engine =Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var roof1
var block1
var poly1
var slingshot
var backgroundImg

function preload(){
   getBackground()
}
  


function setup() {
  createCanvas(1200,800);

  engine = Engine.create()
  world  =engine.world;

  roof1=new Roof(600,450,210,20);
  roof2= new Roof(1000,300,210,20);
  block1= new  Block(925,265,50,50);
  block2= new  Block(975,265,50,50);
  block3= new  Block(1025,265,50,50);
  block4= new  Block(1075,265,50,50);
  //line1
  block5= new Block(950,215,50,50);
  block6= new Block(1000,215,50,50);
  block7= new Block(1050,215,50,50);
  //line2
  block8= new Block(970,165,50,50);
  block9= new Block(1020,165,50,50);
  //line3
  block10=new Block(995,115,50,50);
  //line4
  block11=new Block(525,415,50,50);
  block12=new Block(575,415,50,50);
  block13=new Block(625,415,50,50);
  block14=new Block(675,415,50,50);
  //line1
  block15= new Block(555,365,50,50);
  block16= new Block(605,365,50,50);
  block17= new Block(655,365,50,50);
  //line2
  block18= new Block(580,315,50,50);
  block19= new Block(630,315,50,50);
  //line3
  block20=new Block(600,265,50,50);
  //line14
  poly1= new Polygon(400,400,80,80);
  slingshot=new Slingshot(poly1.body,{x:200,y:200})

  Engine.run(engine);
}

function draw() {
   if(backgroundImg) 
     background(backgroundImg)
  roof1.display(); 
  roof2.display();
  fill("green")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  fill("blue")
  block5.display();
  block6.display();
  block7.display();
  fill("red")
  block8.display();
  block9.display();
  fill("black")
  block10.display();
  fill("brown")
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("green")
  block15.display();
  block16.display();
  block17.display();
  fill("blue")
  block18.display();
  block19.display();
  fill("red")
  block20.display();
  fill("black")
  poly1.display();
  slingshot.display();
}
 function mouseDragged() {
 Matter.Body.setPosition(poly1.body,{x:mouseX,y:mouseY})

 }

 function mouseReleased(){
   slingshot.fly()
   
 }

 function keyPressed(){
  if(keyCode === 32){
   slingshot.attach(poly1.body);
  }
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour<=21){
    bg = "mor.jpg"
  }
  else{
    bg = "night.jpg"
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
                                                                          