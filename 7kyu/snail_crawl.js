// The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).


function snail(column, day, night) {
  // your code here
  let i, travel = 0;
  for (i = 1; ; i++) {
    travel += day;
    if (travel >= column) {
      return i;
    }
    travel -= night;
  }
}



console.log(snail(3,2,1)); // , 2)
console.log(snail(10,3,1)); // , 5)