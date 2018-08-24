// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year as an integer.

// Output: Number of Black Fridays in the year as an integer.

// Precondition: 1000 < |year| < 3000


function unluckyDays(year){
  //your code here
  var count = 0;
  for (var month=0; month<12; month++) {
      var d = new Date(year ,month, 13);
      if(d.getDay() == 5){
        count++;
     }
  }
  return count;
}



console.log(unluckyDays(2723)) //, 2, "should be: 2")