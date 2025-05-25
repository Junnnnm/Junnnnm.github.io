// Perlin Noise Project (Terrain Generation)
// JunyuTang
// Apr 23
// Use the noise() to make the terrain is generated


let rectWidth = 1;
let noiseOffset = 0; // Offset for the initial noise value, incremented each frame

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function generateTerrain() {
  let noiseValue = noiseOffset;   // ; // Start with the current offset each frame
  let highestHeight = -Infinity;
  let highestX = 0;
  let highestY = 0;

  let totalHeight = 0; 
  let count = 0;        

  rectMode(CORNERS);
  for (let x = 0; x < width; x += rectWidth) {
    let rectHeight = map(noise(noiseValue), 0, 1, 50, 1000);     // Use noise() function to generate heights
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    fill(0, 0, 255, 0);
    rect(x, height, x2, y2);

    // check if this is the highest point so far
    if (rectHeight > highestHeight) {
      highestHeight = rectHeight;
      highestX = x + rectWidth / 2;
      highestY = y2;
    }

    totalHeight += rectHeight; 
    count++;

    noiseValue += 0.01;
  }
  rectMode(CORNER);

  //draw flag at the highest point 
  drawFlag(highestX, highestY);


  let avgHeight = totalHeight / count;
  let avgY = height - avgHeight;
  stroke(100); 
  strokeWeight(2);
  line(0, avgY, width, avgY);
}


function draw() {
  background(220); 
  generateTerrain(); // Redraw terrain each frame
  noiseOffset += 0.05; // Increment the offset slightly each frame for panning
}

// change the rect width
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rectWidth = max(1, rectWidth - 1);
  } else if (keyCode === RIGHT_ARROW) {
    rectWidth += 1;
  }
  generateTerrain();
}

// draw the flag
function drawFlag(x, y) {
  stroke(0);
  strokeWeight(5);
  line(x, y, x, y - 30);

  fill(255, 0, 0);
  noStroke();
  triangle(x, y - 10, x, y - 33, x + 20, y - 10);
}
