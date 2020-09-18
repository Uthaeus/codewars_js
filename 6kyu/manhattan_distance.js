// Complete the function that accepts two points and returns the Manhattan Distance between the two points.


function manhattanDistance(pointA, pointB){
    return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}


console.log(manhattanDistance([5,4],[3,2])); //, 4)