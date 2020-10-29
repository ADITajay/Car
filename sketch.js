var car,wall;
var speed,weight,Deformation;

function setup() {
  createCanvas(800,400);
  car=createSprite(100, 200, 100, 50);
  wall=createSprite(700, 200, 20, 100);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {

  background("black");  
  car.velocityX=speed;
  if(car.isTouching(wall)){
    car.velocityX=0;
    Deformation=0.5*weight*speed*speed/22500;
    if(Deformation>180){
      car.shapeColor="red";
    }
    if(Deformation<180&&Deformation>80){
      car.shapeColor="yellow";
    }
    if(Deformation<80){
      car.shapeColor="green";
    }
  }
  drawSprites();
}
