// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.


function  calculateAge(b, y) {

  if (y == b) {
    return 'You were born this very year!';
  } else if (y < b) {
    return `You will be born in ${b - y} ${b - y < 2 ? 'year' : 'years'}.`;
  }
  return `You are ${y - b} ${y - b < 2 ? 'year' : 'years'} old.`;
}



console.log(calculateAge(2000, 1990)) //,"You will be born in 10 years.")
console.log(calculateAge(2011, 2012)) //,"You are 1 year old.")