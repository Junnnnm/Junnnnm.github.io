// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what yosu did to take this project "above and beyond"


let cubelets = [];
let size = 40;
let spacing = size + 2;

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(RADIANS);

  // 3x3x3
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubelets.push(new Cubelet(x * spacing, y * spacing, z * spacing));
      }
    }
  }
}

function draw() {
  background(220);
  orbitControl();

  for (let c of cubelets) {
    c.display();
  }
}

function keyPressed() {
  if (key === 'R') {
    let threshold = size * 0.5;
    for (let cube of cubelets) {
      if (abs(cube.pos.x - spacing) < threshold) {
        cube.rotateFaces('y');
      }
    }
  }
}

class Cubelet {
  constructor(x, y, z) {
    this.pos = createVector(x, y, z);

    this.faces = {
      front: 'red',
      back: 'orange',
      up: 'white',
      down: 'yellow',
      left: 'blue',
      right: 'green'
    };
  }

  rotateFaces(axis) {
    let f = this.faces;
    if (axis === 'y') {
      let temp = f.front;
      f.front = f.left;
      f.left = f.back;
      f.back = f.right;
      f.right = temp;
    }
  }

  getColor(name) {
    switch (name) {
    case 'red': return color(255, 0, 0);
    case 'orange': return color(255, 128, 0);
    case 'white': return color(255);
    case 'yellow': return color(255, 255, 0);
    case 'blue': return color(0, 0, 255);
    case 'green': return color(0, 255, 0);
    default: return color(150);
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    noStroke();
    fill(255);
    box(size);

    this.drawFaceColors(size);
    pop();
  }

  drawFaceColors(size) {
    let s = size / 2;

    // front
    push();
    noStroke();
    fill(this.getColor(this.faces.front));
    translate(0, 0, s + 0.1);
    plane(size, size);
    pop();

    // back
    push();
    noStroke();
    fill(this.getColor(this.faces.back));
    translate(0, 0, -s - 0.1);
    rotateY(PI);
    plane(size, size);
    pop();

    // up
    push();
    noStroke();
    fill(this.getColor(this.faces.up));
    translate(0, -s - 0.1, 0);
    rotateX(HALF_PI);
    plane(size, size);
    pop();

    // down
    push();
    noStroke();
    fill(this.getColor(this.faces.down));
    translate(0, s + 0.1, 0);
    rotateX(HALF_PI);
    plane(size, size);
    pop();

    // left
    push();
    noStroke();
    fill(this.getColor(this.faces.left));
    translate(-s - 0.1, 0, 0);
    rotateY(HALF_PI);
    plane(size, size);
    pop();

    // right
    push();
    noStroke();
    fill(this.getColor(this.faces.right));
    translate(s + 0.1, 0, 0);
    rotateY(HALF_PI);
    plane(size, size);
    pop();
  }
}