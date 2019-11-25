// Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .


function consecutiveDucks(num) {
  
  for (let x = 1; x < num; x++) {
    let sum = x;

    for (let y = x + 1; sum <= num; y++) {
      if (y + sum == num) {
        return true;
      } else {
        sum += y;
      }
    }
  }
  return false;
}



console.log(consecutiveDucks(69)); //, true)
console.log(consecutiveDucks(8)); //, false)