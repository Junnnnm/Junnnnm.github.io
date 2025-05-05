// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let pilot;

function preload(){
  pilot = loadImage("assets/aviator.png");
}
function setup() {
  createCanvas(pilot.width, pilot.height);
}


function setPixelColor(pos, r, g, b){
  // assume pos points at a RED component
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}
function draw() {
  image(pilot,0,0);
  loadPixels();   // fills pixels array
  setPixelColor(300, 255, 0, 0);



  updatePixels();
}


function boostImage(){
  // a brightnening filer; make each pixel brighter
  let boost = 50;
  for(let i = 0; i < pixels.length; i += 4){
    let r = pixels{i} + boost;
    let g = pixels{i+1} + boost;
    let b = pixels{i+2} + boost;
    setPixelColor(i,r,g,b);
  }
}