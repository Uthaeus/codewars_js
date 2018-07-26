// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.


function distanceBetweenPoints(a, b) {
  // your code here
  return Math.hypot(a.x - b.x, a.y - b.y);
}


console.log(distanceBetweenPoints([1, 6], [4, 2])); // 5

