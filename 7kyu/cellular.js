// Given a neighbourhood type ("moore" or "von_neumann"), a 2D matrix and a pair of coordinates, return the list of neighbours of the given cell.


function get_neighbourhood(type, arr, coordinates){
  let myX = [coordinates[0] - 1, coordinates[0], coordinates[0] + 1];
  let myY = [coordinates[1] - 1, coordinates[1], coordinates[1] + 1];
  let result = [];

  for (var y = 0; y < myY.length; y++) {
    for (var x = 0; x < myX.length; x++) {
      if (myX[x] !== coordinates[0] && myY[y] !== coordinates[1]) {
        if (type == 'moore') {
          result.push(arr[myX[x]][myY[y]]);
        }
      }
    }
  }

  return result.sort();
}



var matrix = [[0,1,2],[3,4,5],[6,7,8]]
  
console.log(get_neighbourhood("moore", matrix, [1,1])) //.sort(), [0,1,2,3,5,6,7,8]);
console.log(get_neighbourhood("von_neumann", matrix, [1,1])) //.sort(), [1,3,5,7]);