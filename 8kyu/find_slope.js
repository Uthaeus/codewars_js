// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.


function slope(points) {
    let x = points[0] - points[2];
    let y = points[1] - points[3];

    if (x == 0) {
        return 'undefined';
    }
    return (y / x).toString();
}



console.log(slope([15,45,12,60])); //, "-5")