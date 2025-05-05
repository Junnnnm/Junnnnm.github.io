// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol; // Stores the grid coordinates of the mouse

// Initial grid state (0 = black, 255 = white)
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];

let flipPattern = 'cross'; // Can be 'cross' or 'square'

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Determine the size of each square based on canvas size and grid dimensions
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  console.log("Game started. Press SPACE to toggle flip pattern.");
}

function draw() {
  background(220); // Light grey background
  determineActiveSquare(); // Figure out which tile the mouse cursor is over
  drawGrid(); // Render the grid, including the overlay
  if (checkWinCondition()){
    fill(100);
    textSize(60);
    text("You win", 20, height - 20);
  }
}

// --- Input Handling ---

function mousePressed() {
  if (cheaterClick()) return;
  if (flipPattern === 'cross') {
    // Cross pattern flip
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  } else if (flipPattern === 'square') {
    // Square pattern flip (3x3 grid centered on the mouse)
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        flip(currentCol + i, currentRow + j);
      }
    }
  }
}

function keyPressed() {
  // Toggle flip pattern when SPACE key is pressed
  if (keyCode === 32) { // 32 is the keyCode for SPACE
    if (flipPattern === 'cross') {
      flipPattern = 'square';
    } else {
      flipPattern = 'cross';
    }
    console.log("Flip pattern changed to: " + flipPattern); // Log change to console
  }
}

// --- Game Logic ---

function flip(col, row) {
  // Given a column and row, flip its value (0 to 255 or 255 to 0)
  // Checks boundaries to ensure the col/row exists in the gridData array.
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    if (gridData[row][col] === 0) {
      gridData[row][col] = 255;
    } else {
      gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare() {
  // Calculate which grid square the mouse is currently over
  // Use floor() or int() to convert mouse coordinates to integer grid indices
  currentRow = floor(mouseY / rectHeight);
  currentCol = floor(mouseX / rectWidth);

  // Constrain the values to be within valid grid indices,
  // though the overlay/flip logic also checks boundaries.
  currentRow = constrain(currentRow, 0, NUM_ROWS - 1);
  currentCol = constrain(currentCol, 0, NUM_COLS - 1);
}

// --- Drawing ---

function drawGrid() {
  // 1. Render the grid squares based on gridData
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]); // Set fill based on array value (0=black, 255=white)
      stroke(100); // Add a subtle grey border to squares
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }

  // 2. Draw the overlay to show affected squares
  drawOverlay();
}

function drawOverlay() {
    // Draws a semi-transparent overlay on squares that will be flipped
    fill(0, 255, 0, 100); // Overlay color: light green, semi-transparent
    noStroke(); // No border for the overlay shapes

    // Check if the mouse is potentially over the grid area before drawing overlay
    // (determineActiveSquare already constrains currentCol/Row)

    if (flipPattern === 'cross') {
        // Draw overlay for cross pattern
        drawOverlayRect(currentCol, currentRow);
        drawOverlayRect(currentCol - 1, currentRow);
        drawOverlayRect(currentCol + 1, currentRow);
        drawOverlayRect(currentCol, currentRow - 1);
        drawOverlayRect(currentCol, currentRow + 1);
    } else if (flipPattern === 'square') {
        // Draw overlay for square pattern (3x3)
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                drawOverlayRect(currentCol + i, currentRow + j);
            }
        }
    }
}

// Helper function to draw a single overlay rectangle, including boundary checks
function drawOverlayRect(col, row) {
    // Only draw if the col/row is within the valid grid bounds
    if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
        rect(col * rectWidth, row * rectHeight, rectWidth, rectHeight);
    }
}

// Adjust canvas size if window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Recalculate square sizes
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
}




function cheaterClick() {
  if (keyIsDown(SHIFT)) {
    flip(currentCol, currentRow);  // 只翻转当前位置
    return true;  // 表示用了cheat功能
  }
  return false;
}

function checkWinCondition() {
  let firstValue = gridData[0][0];
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      if (gridData[row][col] !== firstValue) {
        return false;
      }
    }
  }
  return true;
}