// Write a function that returns the total surface area and volume of a box as an array: [area, volume].



function getSize(width, height, depth) {
  var area = width * height * 6;
  var volume = width * height * depth;

  result = [area, volume];
  return result;
}




console.log(getSize(10, 10, 10)) //, [600, 1000]);)
console.log(getSize(4, 2, 6)) //[0], 88))