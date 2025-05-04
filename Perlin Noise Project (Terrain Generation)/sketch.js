// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let xOff = 0;
let rectWidth = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function generateTerrain(){
  // use a loop to generate and draw 
  // several rectangles side to side
  // to look like some 2D terrain
  rectMode(CORNERS);
  let noiseScale = 0.02;
  for(let x = 0; x <width; x += rectWidth){
    // generate a random height.
    // change this from using random() to noise()
    
    let rectHeight = random(50, 400);
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;
    let a = noise(xOff) * height;
    rect(x, height - a, x2, a);
    xOff += noiseScale;
  }
  rectMode(CORNER);
}
function draw() {
  //background(220);
}


function drawFlag(){
  
}