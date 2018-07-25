// Create a function that takes a number as an argument and returns a grade based on that number.


function grader(score) {
  let result;

  if (score <= 1 && score >= 0.9) {
    result = 'A';
  } else if (score < 0.9 && score >= 0.8) {
    result = 'B';
  } else if (score < 0.8 && score >= 0.7) {
    result = 'C';
  } else if (score < 0.7 && score >= 0.6) {
    result = 'D';
  } else {
    result = 'F';
  }
  return result;
}


console.log(grader(0.7)) //, "C")