// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what yosu did to take this project "above and beyond"


function setup() {
  createCanvas(100, 100, WEBGL);

  describe('A multicolor box on a gray background. The camera angle changes when the user interacts using a mouse, trackpad, or touchscreen.');
}

function draw() {
  background(200);

  // Create an options object.
  let options = {
    disableTouchActions: false,
    freeRotation: true
  };

  // Enable orbiting with the mouse.
  // Prevent accidental touch actions on touchscreen devices
  // and enable free rotation.
  orbitControl(1, 1, 1, options);

  // Style the box.
  normalMaterial();

  // Draw the box.
  box(30, 50);
}