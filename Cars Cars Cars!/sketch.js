// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(600,400);
}

function draw() {
  background(15);
  drawRoad();

}

function drawRoad(){
  for(let i = 0; i < width; i += 20){
    stroke(255,0,0);
    strokeWeight(3);
    line(i,200,i + 10,200);
  }

}
class vehicle{
  constructor(x,y){
    this.x = x;     this.y = y;
    
  }
}