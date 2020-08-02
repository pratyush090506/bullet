var bullet,bullet2,bullet3,bullet4,wall,wall2,wall3,wall4,barrier;
var speed,weight,thickness;
function setup() {

  createCanvas(1600,400);

  bullet = createSprite(100, 50, 50, 10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  speed=random(55,90);
  weight=random(30,52);
  wall = createSprite(1200,55,10,60);
  wall.shapeColor="gray";
  barrier = createSprite(800,100,1600,16);
  barrier.shapeColor="white";
 

  bullet2 = createSprite(50, 150, 50, 10);
  bullet2.velocityX=speed;
  bullet2.shapeColor="yellow";
  speed=random(55,90);
  weight=random(30,52);
  wall2 = createSprite(1200,155,10,60);
  wall2.shapeColor="gray";
  barrier = createSprite(800,200,1600,16);
  barrier.shapeColor="white";
  

  bullet3 = createSprite(50, 250, 50, 10);
  bullet3.shapeColor="red";
  bullet3.velocityX=speed;
  speed=random(55,90);
  weight=random(30,52);
  wall3 = createSprite(1200,255,10,60);
  wall3.shapeColor="gray";
 
  barrier = createSprite(800,300,1600,16);
  barrier.shapeColor="white";


  bullet4 = createSprite(50, 350, 50, 10);
  bullet4.shapeColor="blue";
  bullet4.velocityX=speed;
  wall4 = createSprite(1200,355,10,60);
  wall4.shapeColor="gray";
 
  speed=random(55,90);
  weight=random(30,52);

 
 

 thickness=random(20,83);
}

  function draw() {
    background(0,0,0);  
  
    if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);
        
      }
      if(damage<10)
      {
        wall.shapeColor=color(0,255,0);
        
      }
    }

    if(hasCollided(bullet2,wall2))
    {
      bullet2.velocityX=0;
      var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
      if(damage>10)
      {
        wall2.shapeColor=color(255,0,0);
        
      }
      if(damage<10)
      {
        wall2.shapeColor=color(0,255,0);
        
      }
    }
    if(hasCollided(bullet3,wall3))
    {
      bullet3.velocityX=0;
      var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
      if(damage>10)
      {
        wall3.shapeColor=color(255,0,0);
        
      }
      if(damage<10)
      {
        wall3.shapeColor=color(0,255,0);
        
      }
    }
    if(hasCollided(bullet4,wall4))
    {
      bullet4.velocityX=0;
      var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
      if(damage>10)
      {
        wall4.shapeColor=color(255,0,0);
        
      }
      if(damage<10)
      {
        wall4.shapeColor=color(0,255,0);
        
      }
    }


  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
    bulletRightEdge=Lbullet.x+Lbullet.width;
    wallLeftEdge=Lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }else{

    
       return false;

    }
     
}


