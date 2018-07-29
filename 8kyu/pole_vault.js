// You are given the following two guidelines to begin with: (1) A vaulter with a height of 1.52 meters should start at 9.45 meters on the runway. (2) A vaulter with a height of 1.83 meters should start at 10.67 meters on the runway.

// You will receive a vaulter's height in meters (which will always lie in a range between a minimum of 1.22 meters and a maximum of 2.13 meters). Your job is to return the best starting mark in meters, rounded to two decimal places.


function startingMark(bodyHeight){
  // Remember: Body height of 1.52 m --> starting mark: 9.45 m
  //           Body height of 1.83 m --> starting mark: 10.67 m
  // All other starting marks are based on these guidelines!
  var m = (10.67 - 9.45) / (1.83 - 1.52);
  return Math.round((10.67 + m * bodyHeight - m * 1.83) * 100) / 100;
}



console.log(startingMark(1.83)) //, 10.67)