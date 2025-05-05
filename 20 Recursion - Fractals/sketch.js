// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  reCircle(width/2, height/2,width);
}

function circleFractal(x,y,d){
  noFill();
  if(d > 1
}






function reCircle(x,y,d){
  circle(x,y,d);
  if (d >= 10){
    reCircle(x,y,d*0.9);
  }
  reCircle();
}



function cantor(x,y,len,depth){
  if(depth > 1){
    line(x,y, x+len, y );
    y += 20;
  cantor(x,y, len/3, depth-1);
  cantor()
  }
}