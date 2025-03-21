// Image Basics
// Mr.Scott
// Feb 26, 2025

// Global Variables
let lionL, lionR;
let pinImages = [];  // 0-8
let currentFrame = 0;
let facing = "left"; // "left" "right" 

function preload(){
  //function runs and won not end
  //until all file loading is complete
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  for(let i = 0; i <= 8; i++){
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw(){
  background(220);


  image(pinImages[currentFrame], width/2, height/2);
  if(frameCount % 3 === 0){
  currentFrame++;
  if(currentFrame > 8) currentFrame = 0; }
  drawLion();
}
 

function drawLion(){
  //Alt-SHIFT-F(format) -- auto indentation
  //Lion code
  let sizeX = lionL.width / 2;
  let sizeY = lionL.height / 2;

  // managing the state variable
  if(movedX > 0) facing = "right";
  else if(movedX < 0) facing = "left";

  //interpreting the state variable
  if(facing === "left"){
    image(lionL, mouseX, mouseY, sizeX, sizeY);
  }
  else{
    image(lionR, mouseX, mouseY, sizeX, sizeY);
  }

}
