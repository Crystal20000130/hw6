// Variables
var playerHeight = 80
var playerWidth = 15
var playerSpeed = 10
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 2
var ballYSpeed = -1

var BSound;

function preload() {
  soundFormats("mp3");
  Bsound = loadSound("B.mp3");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);
  
  // draw left player
  rect(0, playerL, playerWidth, playerHeight);
  
  // draw right player
  rect(width-playerWidth, playerR, playerWidth, playerHeight);
  
  // draw ball
   fill('#d9c3f7');
  ellipse(ballX, ballY, ballSize)
  
  //Score
  fill('rgba(100%,0%,100%,0.5)');
  textSize(24);
  text("Score: " + scoreL, 10, 25);
  text("Score: " + scoreR, 490, 25);

  
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
  
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
  
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
  
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
  
  // Bounce off top wall
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }
  
  
 
  // bounce off left
  
   if (ballX < playerWidth && ballY >= playerL && ballY <= playerL + playerHeight) {
    ballX = playerWidth
    ballXSpeed = -ballXSpeed
  }
  
  // playerL scores!
  if (ballX > width-playerWidth) {
    ballX = width/2
    ballY = height/2
    scoreL = scoreL + 1
    ballXSpeed = - ballXSpeed 
    Bsound.play();
  }
  
  // bounce off right player
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed
   // bounce off right player
  
  }
  
  //playerR scores
  if (ballX < playerWidth) {
    //ballX = width/2
    //ballY = height/2
    scoreR = scoreR + 1
    ballXSpeed = - ballXSpeed 
     Bsound.play();
    
  }
  }
