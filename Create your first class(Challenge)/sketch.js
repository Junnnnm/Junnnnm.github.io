// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 255, 0, 0, 0],
  [255, 255, 255, 0, 0]
];
let flipMode = "cross"; // 初始翻转模式：十字形 ("cross") 或方块形 ("square")

function setup() {
  // 创建与窗口大小匹配的画布，确保宽高比接近正方形
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
}

function draw() {
  background(220);
  determineActiveSquare(); // 确定鼠标所在的单元
  drawGrid(); // 绘制网格和覆盖层
}

function mousePressed() {
  // 根据当前模式执行翻转
  if (flipMode === "cross") {
    // 十字形模式：翻转当前单元及其上下左右相邻单元
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  } else if (flipMode === "square") {
    // 方块模式：翻转当前单元及其周围3x3区域
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        flip(currentCol + dx, currentRow + dy);
      }
    }
  }
}

function flip(col, row) {
  // 翻转指定位置的单元值（0变为255，255变为0），并检查边界
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare() {
  // 每帧计算鼠标所在的行和列
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
  // 绘制网格，填充颜色根据 gridData
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }

  // 添加覆盖层，突出显示受影响的单元
  if (currentRow >= 0 && currentRow < NUM_ROWS && currentCol >= 0 && currentCol < NUM_COLS) {
    noFill();
    stroke(0, 255, 0, 100); // 绿色半透明边框
    strokeWeight(2);

    if (flipMode === "cross") {
      // 十字形覆盖层：当前单元及上下左右
      rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // 当前单元
      if (currentCol - 1 >= 0) rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // 左
      if (currentCol + 1 < NUM_COLS) rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // 右
      if (currentRow - 1 >= 0) rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight); // 上
      if (currentRow + 1 < NUM_ROWS) rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight); // 下
    } else if (flipMode === "square") {
      // 方块形覆盖层：3x3区域
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (currentCol + dx >= 0 && currentCol + dx < NUM_COLS && currentRow + dy >= 0 && currentRow + dy < NUM_ROWS) {
            rect((currentCol + dx) * rectWidth, (currentRow + dy) * rectHeight, rectWidth, rectHeight);
          }
        }
      }
    }
  }
}

function keyPressed() {
  // 按空格键切换翻转模式
  if (key === ' ') {
    flipMode = (flipMode === "cross") ? "square" : "cross";
    console.log("翻转模式切换至: " + flipMode);
  }
}