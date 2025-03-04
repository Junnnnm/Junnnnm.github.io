// Terrain Generation Starter
// Junyu
// March 4
let rectWidth = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function generateTerrain(){
  // use a loop to generate and draw 
  // several rectangles side to side
  // to look like some 2D terrain
  rectMode(CORNERS);
  for(let x = 0; x <width; x += rectWidth){
    // generate a random height.
    // change this from using random() to noise()
    let rectHeight = random(50, 500);
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;
    rect(x, height, x2, y2);
  }
  rectMode(CORNER);
}
function draw() {
  //background(220);
  let xoff = 0;
  let n = noise(xoff);
  let x = map(n, 0, 1, 0, width);
  ellipse(x, height / 2, 50, 50);
  xoff = xoff + 0.01;
  
}
