// If the today is later from last than the cycleLength, the function should return true. We consider it to be late if the number of passed days is larger than the cycleLength. Otherwise return false.


function periodIsLate(last, today, cycleLength) {
  let toDays = 60 * 60 * 24 * 1000;
  return (today - last) / toDays > cycleLength;
}



console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)) //, true)
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)) //, false))