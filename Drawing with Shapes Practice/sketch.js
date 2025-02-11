// Drawing with Shapes Practice
// Junyu
// 10 Feb 2025

// Global Variable Declarations

let boxX = 200, boxY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawcharacter();
}

function drawcharacter(){
  fill(100,50,250);
  circle(150,150,100);
  square(100, 200, 100);
  fill(100,250,250);
  circle(150,150,100);
}


function drawBox(){
  //draw a box on screen
  fill(100,50,250);
  rect(boxX, boxY, 150, 150, 5, 0, 0);

}



function keyPressed(){
  if (key === "a"){
    boxX = 0;
  }
  if(key === "b"){
    boxY = 400;
  }
  if(keyCode === ESCAPE){
    boxX = width * 0.85;
    boxY = height * 0.65;
  }
}