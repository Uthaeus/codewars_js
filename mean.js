// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.



function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  var total = marks.reduce(function(a, b) {
    return a += b;
  });
  return Math.floor(total / marks.length)
}



console.log(getAverage([1,2,3,4,5,])) //,3))
console.log(getAverage([1,1,1,1,1,1,1,2])) //,1))