// Coordinate System and User Events
// Junyu
// Feb 6, 2025
// Not run-to-complettion, but interactive programs...


function setup() {
  // run Once, at the very beginning....
  createCanvas(500, 500);
}

function draw() {
  // draw Loop, repeats over and over forever...
  // - target of 60 frames per second
  // A new image is drawn at the bottom of the loop 
  background(200);
  twoCircle();
  
}

function Circle_1(){
  fill(0,255,0);
}







function twoCircle(){
  fill(0,255,0); // green fill
  stroke(0,0,255); // blue outline
  strokeWeight(5); // thickness of line:5
  circle(200, 100, 50);

  noStroke(); // turns off outlines
  fill(255,0,0); //red fill
  circle(mouseX, mouseY, 30);
  // secret calculated delay()
  // screen updates at the end of loop
}


