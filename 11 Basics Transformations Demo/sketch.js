/* eslint-disable indent */
// Basic Transformations Demo
// Junyu
// March 6, 2025
// coordinate System Transformations
// Basic Transformations sandbox


// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  angleMode(DEGREES);
  translate(200,200);

  rotate(-frameCount);
  circle(0,0,150);

  let numSpokes = map(mouseX,0,width,1,250);
  let spokeAngle = 360 / numSpokes;


  for(let i = 0; i < 4; i++){
    line(0,0,75,0);
    rotate(90);
  }
  //drawBasicGrid(220);

  //transformation one: TRANSLATION
  //push();   //makes a new coordinate  system on the top
  //translate (120, 120);  //move coordinate system
  //drawBasicGrid(150);
  //rectangleRed(0,0);
  //pop();    // reverts to previous coordinate system


//----------------------------------------------------------------------------------------------------------------------------
  

 
  //transformation two: SCALE
  //push();
  //rectangleRed(40,0);  //50px  square

  // scale:  1 6''no change
  //let scaleAmount = 2.5;
  //scale(scaleAmount);
  //translate(60,60);
  //drawBasicGrid(100);
  //rectangleBlue(20,20);
  //pop();


//----------------------------------------------------------------------------------------------------------------------------------------------------- 



  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  //angleMode(DEGREES);
  //push();
  //translate(140,140);
  //rotate(frameCount);    // always rotates around     // the origin
  //drawBasicGrid(150);
  //face(0,0);
  //pop();  // back base coordinate

  //push();  
  // to rotate an object around itself.   
    //rectMode(CENTER);
    //scale(2);
    //translate (mouseX, mouseY);
    //rotate(-frameCount * 2);
    //rectangleBlue(0,0);
  //pop(); 



  //Combinations of Transformations

  

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}