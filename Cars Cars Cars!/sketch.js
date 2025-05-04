// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// 全局数组，用于存储东向和西向车辆
let eastbound = [];
let westbound = [];
let trafficLight;
let road;

function setup() {
  createCanvas(600, 400); // 创建一个600x400的画布
  road = new Road(); // 初始化道路
  trafficLight = new TrafficLight(20, 320); // 交通灯位于位置(20, 320)

  // 初始化20辆东向车辆
  for (let i = 0; i < 20; i++) {
    let y = random(10, 120); // 道路上半部分(10-130)
    let xSpeed = random(1, 3); // 正速度(向右)
    eastbound.push(new Vehicle(random([0, 100]), random(0, width), y, 1, xSpeed));
  }

  // 初始化20辆西向车辆
  for (let i = 0; i < 20; i++) {
    let y = random(160, 280); // 道路下半部分(160-250)
    let xSpeed = random(-3, -1); // 负速度(向左)
    westbound.push(new Vehicle(random([0, 100]), random(0, width), y, -1, xSpeed));
  }
}

function draw() {
  background(220); // 清除画布
  road.display(); // 绘制道路
  trafficLight.update();
  trafficLight.display();

  // 处理东向车辆
  for (let vehicle of eastbound) {
    vehicle.checkCollision(eastbound); // 检查东向车辆组内的碰撞
    vehicle.action();
  }

  // 处理西向车辆
  for (let vehicle of westbound) {
    vehicle.checkCollision(westbound); // 检查西向车辆组内的碰撞
    vehicle.action();
  }
}

// 按下鼠标时添加车辆
function mousePressed() {
  let y, xSpeed, direction;

  if (keyIsDown(SHIFT)) {
    // Shift + 左键点击：添加一辆西向车辆
    y = random(160, 280); // 道路下半部分
    xSpeed = random(-3, -1); // 负速度(向左)
    direction = 0; // 方向：0表示向左
    westbound.push(new Vehicle(random([0, 10]), mouseX, y, direction, xSpeed));
  } else {
    // 左键点击：添加一辆东向车辆
    y = random(10, 120); // 道路上半部分
    xSpeed = random(1, 3); // 正速度(向右)
    direction = 1; // 方向：1表示向右
    eastbound.push(new Vehicle(random([0, 10]), mouseX, y, direction, xSpeed));
  }
}

// 响应空格键使交通灯变红
function keyPressed() {
  if (key === ' ') {
    trafficLight.turnRed();
  }
}

// Road 类，用于管理道路的渲染
class Road {
  constructor() {
    this.width = 600; // 道路宽度与画布宽度一致
    this.height = 300; // 道路高度
    this.y = 0; // 道路位置(顶部边缘)
  }

  // 绘制道路，带有虚线中心线
  display() {
    fill(0); // 黑色填充道路
    rect(0, this.y, this.width, this.height);

    stroke(255); // 白色描边用于虚线
    strokeWeight(2);
    this.setLineDash([10, 10]); // 虚线样式
    line(0, this.y + this.height / 2, this.width, this.y + this.height / 2);
    this.setLineDash([]); // 重置为实线
  }

  // 辅助函数，用于设置虚线样式
  setLineDash(list) {
    drawingContext.setLineDash(list);
  }
}

// Vehicle 类，用于管理单个车辆
class Vehicle {
  constructor(type, x, y, direction, xSpeed) {
    this.type = type; // 0 表示汽车，1 表示卡车
    this.x = x; // x 位置
    this.y = y; // y 位置
    this.direction = direction; // 0 表示向左，1 表示向右
    this.xSpeed = xSpeed; // 水平速度
    // 根据类型设置颜色：汽车为橙色，卡车为紫色
    this.color = this.type === 0 ? color(255, 165, 0) : color(128, 0, 128);
    this.width = this.type === 0 ? 30 : 30; // 汽车：30，卡车：40
    this.height = this.type === 0 ? 15 : 20; // 汽车：15，卡车：20
  }

  // 根据车辆类型渲染车辆
  display() {
    push(); // 保存当前的绘制状态
    translate(this.x, this.y); // 移动到车辆位置

    // 如果向左移动，则翻转车辆
    if (this.direction === 0) {
      scale(-1, 1); // 水平镜像
    }

    // 绘制车辆车身
    fill(this.color);
    noStroke();
    rect(-this.width / 2, -this.height / 2, this.width, this.height);

    if (this.type === 0) { // 汽车：绘制四个轮子
      fill(200); // 黑色轮子
      let wheelRadius = 2;
      let wheelOffsetY = this.height / 2 + wheelRadius; // 轮子位置在车身下方
      // 左侧轮子
      ellipse(-this.width / 3, wheelOffsetY, wheelRadius * 2, wheelRadius * 2); // 左前轮
      ellipse(-this.width / 6, wheelOffsetY, wheelRadius * 2, wheelRadius * 2); // 左后轮
      // 右侧轮子
      ellipse(this.width / 3, wheelOffsetY, wheelRadius * 2, wheelRadius * 2); // 右前轮
      ellipse(this.width / 6, wheelOffsetY, wheelRadius * 2, wheelRadius * 2); // 右后轮
    } else { // 卡车：绘制前部白色线条(车头)
      stroke(255); // 白色线条
      strokeWeight(1);
      // 线条位置取决于方向(卡车前部)
      let lineX = this.direction === 1 ? -this.width / 2 + 5 : this.width / 2 - 5;
      line(lineX, -this.height / 2, lineX, this.height / 2); // 前部垂直线
    }

    pop(); // 恢复绘制状态
  }

  // 根据 xSpeed 更新车辆位置
  move() {
    if (trafficLight.isGreen()) {
      this.x += this.direction === 1 ? this.xSpeed : -this.xSpeed; // 向右或向左移动
    }

    // 如果车辆超出屏幕，则循环返回
    if (this.x > width + this.width / 2) {
      this.x = -this.width / 2;
    } else if (this.x < -this.width / 2) {
      this.x = width + this.width / 2;
    }
  }

  // 加速(最高限速为15或-15)
  speedUp() {
    if (this.direction === 1) {
      this.xSpeed += 0.5; // 向右移动
      if (this.xSpeed > 15) this.xSpeed = 15;
    } else {
      this.xSpeed += 0.5; // 向左移动(xSpeed为正，direction调整移动方向)
      if (this.xSpeed > 15) this.xSpeed = 15;
    }
  }

  // 减速(最低速度为0)
  speedDown() {
    if (this.direction === 1) {
      this.xSpeed -= 0.5; // 向右移动
      if (this.xSpeed < 0) this.xSpeed = 0;
    } else {
      this.xSpeed -= 0.5; // 向左移动
      if (this.xSpeed < 0) this.xSpeed = 0;
    }
  }

  // 将车辆颜色更改为随机颜色
  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }

  // 检查与其他车辆的碰撞(同向车辆)
  checkCollision(vehicles) {
    for (let other of vehicles) {
      if (other === this) continue;

      let distance = abs(this.x - other.x);
      let minDistance = (this.width + other.width) / 2 + 10; // 安全距离

      if (distance < minDistance && abs(this.y - other.y) < 10) { // 同车道
        if (this.direction === 1 && this.x < other.x) { // 本车在后
          this.speedDown();
          other.speedUp();
        } else if (this.direction === 0 && this.x > other.x) { // 本车在后
          this.speedDown();
          other.speedUp();
        }
      }
    }
  }

  // 主要行为方法，更新车辆行为
  action() {
    this.move();
    this.display();

    if (trafficLight.isGreen()) {
      if (random(100) < 1) this.speedUp();
      if (random(100) < 1) this.speedDown();
      if (random(100) < 1) this.changeColor();
    }
  }
}

// TrafficLight 类，用于管理交通灯行为
class TrafficLight {
  constructor(x, y) {
    this.x = x; // x 位置
    this.y = y; // y 位置
    this.state = "green"; // 初始状态：绿色
    this.frameCount = 0; // 帧计数器，用于红灯持续时间
  }

  // 渲染交通灯
  display() {
    fill(this.state === "green" ? color(0, 255, 0) : color(255, 0, 0)); // 绿色或红色
    ellipse(this.x, this.y, 30, 30);
  }

  // 更新交通灯状态
  update() {
    if (this.state === "red") {
      this.frameCount--;
      if (this.frameCount <= 0) {
        this.state = "green";
      }
    }
  }

  // 将交通灯变为红色，持续120帧
  turnRed() {
    if (this.state === "green") {
      this.state = "red";
      this.frameCount = 120;
    }
  }

  // 检查交通灯是否为绿色
  isGreen() {
    return this.state === "green";
  }
}