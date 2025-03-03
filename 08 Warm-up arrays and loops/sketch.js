// Warm Up Exercises:
// 1. Summing an array
// 2. Drawing with Loops Practice


let a = [22, 11, 5, 5, 90, 80, 70, 60];
//        0   1  2.....
// a.length is 8

function setup() {
  createCanvas(400, 400);
  background(200);
  // TASK 1:   Add up all the values in our array
  //           and display the total in the console
  let total = 0;

  //for(let currentNumber of a){
  //total += currentNumber;
  // }

  for(let x = 0; x <= width; x += width/10){
    circle(x, x, 20);
    circle(x, 400-x, 20);
  }
}

function draw() {
  
}
