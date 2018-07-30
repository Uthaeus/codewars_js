// Write a function which will return the days in the year and the year entered in a string. For example 2000, entered as an integer, will return as a string 2000 has 366 days


function yearDays(year) {
  //your code here
  let days;
  if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {
    days = 366;
  } else {
    days = 365;
  }
  return `${year} has ${days} days`
}



console.log(yearDays(1974)) //, '1974 has 365 days')