// Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.


function shortenToDate(longDate) {
  // your code here
  let myDate = longDate.split(' ');
  return `${myDate[0]} ${myDate[1]} ${myDate[2].replace(',', '')}`;
}



console.log(shortenToDate("Monday December 25, 10pm")) //, "Monday December 25"))