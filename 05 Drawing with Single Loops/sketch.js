// Drawing with Single Loops
// Junyu
// Feb 24
// 


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradientBackground();
  circleLine();

  // screen gets updated here
}

function gradientBackground(){
  // creat a gradient to use as background
  let h = 10;

  // use a loop to draw vertical stack of rectangles
  for(let y = 0; y < height; y += h){
    noStroke();
    let mappedY = map(y,0,height,0,255);
    let reversedY = map(y,0,height,255,0);
    fill(mappedY, mappedY, mouseX);
    rect(0, y, width, h);
  }

}

function circleLine(){
  //use a loop (for or while) to draw a line
  //of circle side by side
  let d = 30;   // diameter of each circle
  let y = height/2;
  let xStart = 0;
  let xEnd = width;

  //use a loop to do the drawing
  for(let x = xStart; x <= xEnd; x+=d){
    //x:0 40 80 120 160 200 240
    circle(x, y, d);
  }

}