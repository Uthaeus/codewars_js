// To solve the puzzle you must create a function that returns an integer representing the total number of small cubes with at least one red side.


var countSquares = function(cuts){

  if (!cuts) {
    return 1;
  }

  const totalCubes = Math.pow(cuts + 1, 3);
  const innerCubes = Math.pow(cuts - 1, 3);
  
  return totalCubes - innerCubes;
}



console.log(countSquares(16)) //,1538)