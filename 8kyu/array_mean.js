// Return the average of the given array rounded down to its nearest integer.


function getAverage(marks){
    let total = marks.reduce((a, b) => a += b);
    return Math.floor(total / marks.length);
}


console.log(getAverage([1,2,3,4,5,])); //,3