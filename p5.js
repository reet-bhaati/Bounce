let ball={
    x:300,
    y:200,
    x_velocity:5,
    y_velocity:8,
  }
  function setup()
  {
    createCanvas(600,400)
    background(0)
  }
  
  function bounce()
  {
    if(ball.x>width||ball.x<0)
    {
      ball.x_velocity*=-1;
    }
    
    if(ball.y<0||ball.y>height)
    {
      
      ball.y_velocity*=-1;
    }
    
  }
  
  function move()
  {
   
    ball.x=ball.x+ball.x_velocity;
    ball.y=ball.y+ball.y_velocity;
  }
  
  function draw()
  {
    background(0)
    move();
    bounce();
    display();
  }
  function display()
  {
    noStroke()
    fill(244,7,0)
    circle(ball.x,ball.y,20) 
  }