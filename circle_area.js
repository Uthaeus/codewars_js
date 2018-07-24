// This series of katas will introduce you to basics of doing geometry with computers.

// Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
// The Circle class can be seen below:
class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}

class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}


function circleArea(circle){
  // your code here
  c = circle.radius;

  console.log(c);

  a = Math.PI * Math.pow(c, 2);

  return a //.toFixed(6);
}


console.log(circleArea( new Circle( new Point(10, 10), 30)).toFixed(6)) //, 2827.433388)

// console.log(circleArea(30));
// 30 => 2827.433388