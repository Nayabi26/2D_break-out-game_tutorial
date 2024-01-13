const canvas = document.getElementById("myCanvas");
const ctx= canvas.getContext("2d");  /* Create a 2d rendering tool that use to draw on canvas */

/** Creating Function draw will call upon repeatedly with setInterval for showing the movemnts of ball */
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx=2;
let dy=-2;

//Defining paddle height width and starting point
const paddleHeight=10;
const paddleWidth=75;
let paddleX= (canvas.width-paddleWidth)/2

const ballRadius=10;

//Paddle controls variables
let rightPressed=false;
let leftPressed= false;

//Addig EventListener to the document
document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

//Defining each event 
function keyDownHandler(e)
{
   if(e.key==="Right" || e.key==="ArrowRight")
   {
    rightPressed=true;
   }
 else  if(e.key==="Left" || e.key==="ArrowLeft")
   {
    leftPressed=true;
   }
}
function keyUpHandler(e)
{
   if(e.key==="Right" || e.key==="ArrowRight")
   {
    rightPressed=false;
   }
 else  if(e.key==="Left" || e.key==="ArrowLeft")
   {
    leftPressed=false;
   }
}

function drawBall(){
   
    ctx.beginPath();

    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle="#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle(){
   
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle="#0095DD";
    ctx.fill();
    ctx.closePath();

}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
<<<<<<< HEAD
    drawPaddle();
    // checking the collision with the wall . if ball collid with wall we change the diection
=======
    // checking the collision with the wall . if ball collid with wall we change the direction
>>>>>>> 2c1fb733ba511832ce3df2d7c03d3cf9b7f5c596
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
      
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
      
    }
  // Adding paddle moving logic
    if(rightPressed)
    {
        paddleX=Math.min(paddleX+7,canvas.width-paddleWidth);
    }
    if(leftPressed)
    {
        paddleX=Math.max(paddleX-7,0);
    }
    x += dx;
    y += dy;
   
}
setInterval(draw,10);
