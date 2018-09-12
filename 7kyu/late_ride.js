// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.


function lateRide(n) {
  //coding and coding..
  
  let hrs = Math.floor(n / 60);
  let secs = n - (hrs * 60);
  let timeString = hrs.toString() + secs.toString();
  return timeString.split('').map(a => +a).reduce((a, b) => a += b);
  
}



console.log(lateRide(1439)); // , 19)
console.log(lateRide(0)); // , 0)